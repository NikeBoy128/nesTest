import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Benefits } from '../entities/benefits.entity';

@Injectable()
export class BenefitsRepository extends Repository<Benefits> {
  constructor(dataSource: DataSource) {
    super(Benefits, dataSource.createEntityManager());
  }
}
