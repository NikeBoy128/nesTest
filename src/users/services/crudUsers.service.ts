import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Users } from '../entities/users.entity';
import { UserQuestionsRepository } from '../repositories/userQuestions.repository';
import { UserQuestions } from '../entities/userQuestions.entity';

@Injectable()
export class CrudUsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userQuestionsRepository: UserQuestionsRepository,
  ) {}

  async create(user: Users): Promise<string | number> {
    const newUser = await this.userRepository.save(user);
    return newUser.id;
  }

  async getQuestionsByUserId(userId: number): Promise<UserQuestions[]> {
    const questions = await this.userQuestionsRepository.find({
      where: { userId },
      relations: ['question'],
    });

    return questions;
  }

  async findUserByEmail(email: string): Promise<Users> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
