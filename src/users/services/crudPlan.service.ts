import { Injectable } from '@nestjs/common';
import { PlansRepository } from '../repositories/plans.repository';
import { Plans } from '../entities/plans.entity';

@Injectable()
export class CrudPlanService {
  constructor(private readonly plansRepository: PlansRepository) {}

  async create(plan: Plans): Promise<string | number> {
    const rowId = await this.plansRepository.save(plan);
    return rowId.id;
  }
}
