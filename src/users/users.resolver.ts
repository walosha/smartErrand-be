import { Resolver, Query, Mutation, Args, Context } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { UseGuards } from "@nestjs/common";
import { FindManyUserArgs } from "src/@generated/user/find-many-user.args";
import { User } from "src/graphql.schema";
import { FindUniqueUserArgs } from "src/@generated/user/find-unique-user.args";
import { UpdateOneUserArgs } from "src/@generated/user/update-one-user.args";
import { DeleteOneUserArgs } from "src/@generated/user/delete-one-user.args";
import { GqlAuthGuard } from "src/common/guards/gql-auth.guard";
import { Roles } from "src/common/decorators/roles.decorator";
import Role from "src/common/role/roles.enum";
import { RolesGuard } from "src/common/guards/roles.guard";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";

@Resolver("User")
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  me(@Context() data: { user: User }) {
    return data.user;
  }

  @Query("users")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async findAll(@Args() args: FindManyUserArgs) {
    return await this.usersService.findAll(args);
  }

  @Query("user")
  async findOne(@Args() args: FindUniqueUserArgs): Promise<User> {
    return await this.usersService.findOne(args);
  }

  @Mutation("updateUser")
  async update(@Args() args: UpdateOneUserArgs) {
    return await this.usersService.update(args);
  }

  @Mutation("removeUser")
  async remove(@Args() args: DeleteOneUserArgs) {
    return this.usersService.remove(args);
  }
}
