import { Injectable } from "@nestjs/common";
import { Prisma } from ".prisma/client";
import { generate } from "referral-codes";
import { PrismaService } from "../../prisma/prisma.service";
import { UserCreateInput } from "src/@generated/user/user-create.input";
import { UserUpdateInput } from "src/@generated/user/user-update.input";

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

  async create(createUserInput: UserCreateInput) {
    const referralCode = generate({
      length: 8,
      prefix: `${createUserInput.firstname}-`,
    })[0];
    return await this.prisma.user.create({
      data: { referralCode, ...createUserInput },
    });
  }

  async findAll(args) {
    return await this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserInput: UserUpdateInput) {
    return await this.prisma.user.update({
      data: updateUserInput,
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
