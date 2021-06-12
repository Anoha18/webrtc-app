import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";

export const getJwtConfig = async (configService: ConfigService): Promise<JwtModuleOptions> => {
  return {
    secret: configService.get('ACCESS_TOKEN_SECRET'),
    signOptions: {
      expiresIn: 60 * 60
    }
  }
}