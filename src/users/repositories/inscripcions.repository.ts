import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Inscripcions } from '../entities/inscriptions.entity';

@Injectable()
export class InscripcionsRepository extends Repository<Inscripcions> {
  constructor(dataSource: DataSource) {
    super(Inscripcions, dataSource.createEntityManager());
  }
}
