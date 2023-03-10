import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { compare } from "bcrypt";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "emailOrPassword",
      passwordField: "password",
    });
  }

  async validate(emailOrPassword: string, password: string): Promise<any> {
    const user = await this.authService.checkUserExists(
      { email: emailOrPassword },
      { phone: emailOrPassword }
    );
    if (!user) {
      throw new HttpException(
        { message: "Credentials incorrect" },
        HttpStatus.UNAUTHORIZED
      );
    }
    const valid = user && (await compare(password, user?.password));
    if (user && valid) {
      delete user.password;
      return user;
    }

    return null;
  }
}
