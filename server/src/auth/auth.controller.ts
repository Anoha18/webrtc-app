import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { PayloadJWT } from './auth.interfaces';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('/signin')
  @HttpCode(200)
  async signin(@Body() dto: SigninDto) {
    const user = await this.authService.validateUser(dto);
    const tokenPayload: PayloadJWT = {
      login: user.login,
      firstname: user.firstname,
    }
    const accessToken = await this.authService.createAccessToken(tokenPayload)
    const refreshToken = await this.authService.createRefreshToken(tokenPayload);
    return {
      success: 1,
      data: {
        user,
        accessToken,
        refreshToken,
      }
    }
  }

  @UsePipes(new ValidationPipe())
  @Post('/signup')
  @HttpCode(200)
  async signup(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);
    return {
      success: 1,
      data: user
    }
  }
}
