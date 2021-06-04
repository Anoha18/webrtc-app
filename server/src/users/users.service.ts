import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<UsersEntity>
  ) {}

  async findByLogin(login: string): Promise<UsersEntity | undefined> {
    return this.usersRepository.findOne({ login });
  }
}
