import { Injectable } from '@nestjs/common';
import { Plans } from '../entities/plans.entity';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class PlansRepository extends Repository<Plans> {
  constructor(dataSource: DataSource) {
    super(Plans, dataSource.createEntityManager());
  }
}
