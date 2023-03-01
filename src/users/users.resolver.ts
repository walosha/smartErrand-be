import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { Prisma } from "@prisma/client";
@Resolver("User")
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation("createUser")
  async create(
    @Args("createUserInput") createUserInput: Prisma.UserCreateInput
  ) {
    return await this.usersService.create(createUserInput);
  }

  @Query("users")
  async findAll() {
    return this.usersService.findAll();
  }

  @Query("user")
  async findOne(@Args("id") id: number) {
    return await this.usersService.findOne(id);
  }

  @Mutation("updateUser")
  async update(
    @Args("id") id: string,
    @Args("updateUserInput") updateUserInput: Prisma.UserUpdateInput
  ) {
    return await this.usersService.update(id, updateUserInput);
  }

  @Mutation("removeUser")
  async remove(@Args("id") id: number) {
    return await this.usersService.remove(id);
  }
}
