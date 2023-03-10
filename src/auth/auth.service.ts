import { Injectable } from "@nestjs/common";
import { UserCreateInput } from "src/@generated/user/user-create.input";
import { generate } from "referral-codes";
import { PrismaService } from "prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/graphql.schema";
import Role from "src/common/role/roles.enum";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async checkUserExists(
    phoneInput: Prisma.UserWhereInput,
    emailInput: Prisma.UserWhereInput
  ) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [phoneInput, emailInput],
      },
    });
    return user;
  }

  createToken({ id, email, phone, firstname, lastname, referralCode }: User) {
    return this.jwtService.sign({
      id,
      email,
      phone,
      firstname,
      lastname,
      referralCode,
    });
  }

  async create(createUserInput: UserCreateInput) {
    createUserInput.referralCode = generate({
      length: 8,
      prefix: `${createUserInput.firstname}-`,
    })[0];

    return await this.prisma.user.create({
      data: { ...createUserInput, role: { set: [Role.USER] } },
    });
  }

  async signin(args) {
    return await this.prisma.user.findMany<Prisma.UserFindManyArgs>(args);
  }
}
