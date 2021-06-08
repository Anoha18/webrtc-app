import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { NOT_FOUND_USER } from './auth.constants';
import { SigninDto } from './dto/signin.dto';
import { compare, genSalt, hash } from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor (
    private readonly usersService: UsersService
  ) {}

  async validateUser(dto: SigninDto): Promise<any> {
    const user = await this.usersService.findByLogin(dto.login);
    if (!user) {
      throw new UnauthorizedException(NOT_FOUND_USER);
    }
    
  }
}
