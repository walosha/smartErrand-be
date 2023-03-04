import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from ".prisma/client";
import { generate } from "referral-codes";
import { PrismaService } from "../../prisma/prisma.service";
import { UserCreateInput } from "src/@generated/user/user-create.input";
import { User } from "src/graphql.schema";
import jwt from "jsonwebtoken";
import { UpdateOneUserArgs } from "src/@generated/user/update-one-user.args";
import { DeleteOneUserArgs } from "src/@generated/user/delete-one-user.args";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async checkUserExists(
    phoneInput: Prisma.UserWhereInput,
    emailInput: Prisma.UserWhereInput
  ) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [phoneInput, emailInput],
      },
    });
    return !!user;
  }
  createToken({ id, email, phone }: User) {
    return jwt.sign({ id, email, phone }, "secret");
  }

  async create(createUserInput: UserCreateInput) {
    const referralCode = generate({
      length: 8,
      prefix: `${createUserInput.firstname}-`,
    })[0];
    return await this.prisma.user.create({
      data: { referralCode, ...createUserInput },
    });
  }

  async signin(args) {
    return await this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }

  async findAll(args) {
    return await this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }

  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>
  ): Promise<User> {
    return await this.prisma.user.findUnique(args);
  }

  async update(updateUserInput: UpdateOneUserArgs) {
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
