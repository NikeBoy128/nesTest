import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CrudUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }
}
