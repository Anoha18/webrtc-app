import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { UsersService } from "src/users/users.service";
import { PayloadJWT } from "./auth.interfaces";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    } as StrategyOptions);
  }

  async validate(jwtPayload: PayloadJWT) {
    const { login } = jwtPayload;
    if (!login) throw new UnauthorizedException();

    const user = await this.usersService.findByLogin(login);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
