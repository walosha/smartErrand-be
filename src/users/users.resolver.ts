import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { HttpException, HttpStatus } from "@nestjs/common";
import { UserUpdateInput } from "src/@generated/user/user-update.input";
import { UserCreateInput } from "src/@generated/user/user-create.input";
import { FindManyUserArgs } from "src/@generated/user/find-many-user.args";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation("createUser")
  async create(@Args("createUserInput") createUserInput: UserCreateInput) {
    const user = await this.usersService.checkUserExists(
      {
        phone: {
          contains: createUserInput.phone,
          mode: "insensitive",
        },
      },
      {
        phone: {
          contains: createUserInput.email,
          mode: "insensitive",
        },
      }
    );

    if (user)
      throw new HttpException(
        {
          message: "Email or Phone Number  already exists",
        },
        HttpStatus.CONFLICT
      );
    return await this.usersService.create(createUserInput);
  }

  @Query("users")
  async findAll(@Args() args: FindManyUserArgs) {
    return await this.usersService.findAll(args);
  }

  @Query("user")
  async findOne(@Args("id") id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation("updateUser")
  async update(
    @Args("id") id: string,
    @Args("updateUserInput") updateUserInput: UserUpdateInput
  ) {
    return await this.usersService.update(id, updateUserInput);
  }

  @Mutation("removeUser")
  async remove(@Args("id") id: number) {
    return this.usersService.remove(id);
  }
}
