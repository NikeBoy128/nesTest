import { Injectable } from '@nestjs/common';
import { CrudPlanService } from '../services/crudPlan.service';
import { CreateOrUpdatePlanDto } from '../dto/plans.dto';
import { Plans } from '../entities/plans.entity';

@Injectable()
export class CrudPlansUseCase {
  constructor(private readonly crudPlanService: CrudPlanService) {}

  async create(planDto: CreateOrUpdatePlanDto): Promise<string | number> {
    const plan: Plans = {
      id: planDto.id,
      name: planDto.name,
      price: planDto.price,
      description: planDto.description,
    };

    const rowId = await this.crudPlanService.create(plan);
    return rowId;
  }
}
