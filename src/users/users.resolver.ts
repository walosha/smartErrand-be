import { Resolver, Query, Mutation, Args, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { HttpException, HttpStatus, UseGuards } from "@nestjs/common";
import { UserCreateInput } from "src/@generated/user/user-create.input";
import { FindManyUserArgs } from "src/@generated/user/find-many-user.args";
import { User } from "src/graphql.schema";
import { FindUniqueUserArgs } from "src/@generated/user/find-unique-user.args";
import { UpdateOneUserArgs } from "src/@generated/user/update-one-user.args";
import { DeleteOneUserArgs } from "src/@generated/user/delete-one-user.args";
import { GqlAuthGuard } from "./guards/gql-auth.guard";
import { Role } from "@prisma/client";
import { Roles } from "./decorators/roles.decorator";
// import { AuthGaurd } from "./guards/roles.guard";

@Resolver("User")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @Query()
  // @UseGuards(new AuthGaurd())
  // me(@Context("user") user: User) {
  //   return user;
  // }

  @Query("users")
  async findAll(@Args() args: FindManyUserArgs) {
    return await this.usersService.findAll(args);
  }

  @Query("user")
  async findOne(@Args() args: FindUniqueUserArgs): Promise<User> {
    return await this.usersService.findOne(args);
  }

  @Mutation("signin")
  @UseGuards(GqlAuthGuard)
  @Roles(Role.ADMIN)
  async signin(@Args() args: UserCreateInput) {
    const user = await this.usersService.checkUserExists(
      {
        phone: {
          contains: args.phone,
        },
      },
      {
        phone: {
          contains: args.email,
        },
      }
    );

    if (user) {
    }
  }

  @Mutation("updateUser")
  async update(@Args() args: UpdateOneUserArgs) {
    return await this.usersService.update(args);
  }

  @Mutation("removeUser")
  async remove(@Args() args: DeleteOneUserArgs) {
    return this.usersService.remove(args);
  }

  @Mutation("signup")
  async create(@Args("createUserInput") createUserInput: UserCreateInput) {
    const user = await this.usersService.checkUserExists(
      {
        phone: {
          contains: createUserInput.phone,
        },
      },
      {
        phone: {
          contains: createUserInput.email,
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
}
