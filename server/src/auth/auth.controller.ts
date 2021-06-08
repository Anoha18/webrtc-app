import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
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
    return {
      success: 1,
      data: user
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
