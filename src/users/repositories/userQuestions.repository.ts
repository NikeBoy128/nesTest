import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserQuestions } from '../entities/userQuestions.entity';

@Injectable()
export class UserQuestionsRepository extends Repository<UserQuestions> {
  constructor(datasoruce: DataSource) {
    super(UserQuestions, datasoruce.createEntityManager());
  }
}
