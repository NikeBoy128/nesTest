import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { PlansBenefits } from '../entities/plansBenefits.entity';

@Injectable()
export class PlansBenefitsRepository extends Repository<PlansBenefits> {
  constructor(dataSource: DataSource) {
    super(PlansBenefits, dataSource.createEntityManager());
  }
}
