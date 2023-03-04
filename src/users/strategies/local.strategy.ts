import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "../users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      usernameField: "email",
      passwordField: "phone",
    });
  }

  async validate(email: string, phone: string): Promise<any> {
    const user = await this.usersService.checkUserExists({ email }, { phone });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
