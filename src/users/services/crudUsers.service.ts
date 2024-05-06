import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Users } from '../entities/users.entity';

@Injectable()
export class CrudUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: Users): Promise<string | number> {
    const newUser = await this.userRepository.save(user);
    return newUser.id;
  }
}
