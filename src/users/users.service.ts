import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from ".prisma/client";
import { PrismaService } from "../../prisma/prisma.service";
import { generate } from "referral-codes";
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: Prisma.UserCreateInput) {
    const referralCode = generate({
      length: 8,
      prefix: `${createUserInput.firstname}-`,
    })[0];

    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            phone: {
              contains: createUserInput.phone,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: createUserInput.email,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    if (user)
      throw new HttpException(
        {
          message: "Email or Phone Number  already exists",
        },
        HttpStatus.CONFLICT
      );

    return await this.prisma.user.create({
      data: { referralCode, ...createUserInput },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserInput: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      data: updateUserInput,
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
