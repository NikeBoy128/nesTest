import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Users } from '../entities/users.entity';
import { UserQuestionsRepository } from '../repositories/userQuestions.repository';
import { UserQuestions } from '../entities/userQuestions.entity';
import { InscripcionsRepository } from '../repositories/inscripcions.repository';
import { Inscripcions } from '../entities/inscriptions.entity';

@Injectable()
export class CrudUsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userQuestionsRepository: UserQuestionsRepository,
    private readonly inscripcionsRepository: InscripcionsRepository,
  ) {}

  async create(user: Users): Promise<string | number> {
    const findUser = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (findUser) {
      throw new HttpException(
        'Ya existe un usuario con el correo electronico proporcionado',
        HttpStatus.CONFLICT,
      );
    }
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

  async delete(id: number) {
    await this.userRepository.softDelete(id);
  }

  async update(user: Users) {
    await this.userRepository.update(user.id, user);
  }

  async saveInscription(inscription: Inscripcions): Promise<string | number> {
    const finInscripcion = await this.inscripcionsRepository.findOne({
      where: {
        userId: inscription.userId,
      },
    });
    if (finInscripcion) {
      throw new HttpException(
        'Ya existe una inscripcion vigente',
        HttpStatus.BAD_REQUEST,
      );
    }
    const rowId = await this.inscripcionsRepository.save(inscription);

    return rowId.id;
  }
}
