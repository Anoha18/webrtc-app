import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { NOT_FOUND_USER } from './auth.constants';
import { SigninDto } from './dto/signin.dto';
import { compare, genSalt, hash } from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { PayloadJWT } from './auth.interfaces';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../users/users.interfaces';

@Injectable()
export class AuthService {
  constructor (
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(dto: SigninDto): Promise<IUser> {
    const user = await this.usersService.findByLogin(dto.login);
    if (!user) {
      throw new UnauthorizedException(NOT_FOUND_USER);
    }
    
    const isCorrectPassword = await compare(dto.password, user.password);
    if (!isCorrectPassword) throw new UnauthorizedException(NOT_FOUND_USER);

    delete user.password;
    return user;
  }

  async createJWT(payload: PayloadJWT) {
    return {
      accessToken: await this.jwtService.signAsync(payload),
    }
  }
}
