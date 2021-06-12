import { BadRequestException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LOGIN_IS_TAKEN } from './users.constants';
import { UsersEntity } from './users.entity';
import { compare, genSalt, hash } from 'bcryptjs';
import { IUser } from './users.interfaces';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>
  ) {}

  async findByLogin(login: string): Promise<UsersEntity | undefined> {
    return this.usersRepository.findOne({ login });
  }

  async create(dto: CreateUserDto): Promise<IUser> {
    const isExistsLogin = await this.findByLogin(dto.login);
    if (isExistsLogin) {
      throw new BadRequestException(LOGIN_IS_TAKEN);
    }

    const user = new UsersEntity();
    const salt = await genSalt(10);
    user.password = await hash(dto.password, salt);
    user.firstname = dto.firstname;
    user.login = dto.login;

    try {
      const savedUser = await this.usersRepository.save(user);
      delete savedUser.password;
      return savedUser;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
