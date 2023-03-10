import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { HttpException, HttpStatus } from "@nestjs/common";
import { SignUserInput } from "src/graphql.schema";
import { compare } from "bcrypt";
import { UserCreateInput } from "src/@generated/user/user-create.input";

@Resolver("Auth")
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation("signin")
  async signin(@Args() args: { loginUserInput: SignUserInput }) {
    const { emailOrPassword, password } = args.loginUserInput;
    const user = await this.authService.checkUserExists(
      {
        phone: emailOrPassword,
      },
      {
        email: emailOrPassword,
      }
    );
    const valid = user && (await compare(password, user?.password));
    if (!valid)
      throw new HttpException(
        { message: "Credentials incorrect" },
        HttpStatus.UNAUTHORIZED
      );
    if (user && valid) {
      const { id, email, phone, firstname, lastname, referralCode, role } =
        user;
      const access_token = this.authService.createToken({
        id,
        email,
        phone,
        firstname,
        lastname,
        referralCode,
        role,
      });
      delete user.password;
      return { user, access_token };
    }
  }

  @Mutation("signup")
  async create(@Args("createUserInput") createUserInput: UserCreateInput) {
    const user = await this.authService.checkUserExists(
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
    return await this.authService.create(createUserInput);
  }
}
