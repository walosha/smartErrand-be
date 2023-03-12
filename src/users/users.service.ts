import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from ".prisma/client";
import { PrismaService } from "../../prisma/prisma.service";
import { User } from "src/graphql.schema";
import { DeleteOneUserArgs } from "src/@generated/user/delete-one-user.args";
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(args) {
    return await this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }

  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>
  ): Promise<User> {
    return await this.prisma.user.findUnique(args);
  }

  async update(updateUserInput: Prisma.UserUpdateArgs) {
    return await this.prisma.user.update(updateUserInput);
  }

  async remove(args: DeleteOneUserArgs) {
    try {
      await this.prisma.user.delete(args);
    } catch (error) {
      throw new HttpException(
        {
          message: "Resource already deleted",
        },
        HttpStatus.NO_CONTENT
      );
    }
  }
}
