import { Injectable } from '@nestjs/common';
import { CrudPlanService } from '../services/crudPlan.service';
import {
  AddBenefitToPlanDto,
  CreateOrUpdatePlanDto,
  deleteBenefitFromPlanDto,
} from '../dto/plans.dto';
import { Plans } from '../entities/plans.entity';
import { PlansBenefits } from '../entities/plansBenefits.entity';
import { CrudPlansBenefitsService } from '../services/crudplansbenefits.service';

@Injectable()
export class CrudPlansUseCase {
  constructor(
    private readonly crudPlanService: CrudPlanService,
    private readonly crudPlansBenefitsService: CrudPlansBenefitsService,
  ) {}

  async create(planDto: CreateOrUpdatePlanDto): Promise<string | number> {
    const plan: Plans = {
      id: planDto.id,
      name: planDto.name,
      price: planDto.price,
      description: planDto.description,
      image: planDto.image,
    };

    const rowId = await this.crudPlanService.create(plan);
    return rowId;
  }

  async getPlanes() {
    const planes = await this.crudPlanService.getPlanes();
    return planes;
  }

  async addBenefitToPlan(
    plansBenefitsDto: AddBenefitToPlanDto,
  ): Promise<string | number> {
    const planBenefit: PlansBenefits = {
      planId: plansBenefitsDto.planId,
      benefitId: plansBenefitsDto.benefitId,
    };
    const rowId = await this.crudPlansBenefitsService.create(planBenefit);
    return rowId;
  }

  async getBenefitsByPlanId(planId: number) {
    const allBenefits = await this.crudPlansBenefitsService.getAllBenefits();
    const benefitsPlan =
      await this.crudPlansBenefitsService.getBenefitsByPlanId(planId);
    const currentBenefits = benefitsPlan.map((benefit) => benefit.benefit);

    const benefitswhitStatus = allBenefits.map((benefit) => {
      const status = currentBenefits.some(
        (currentBenefit) => currentBenefit.id === benefit.id,
      );
      return { ...benefit, status };
    });
    return benefitswhitStatus;
  }

  async deleteBenefitFromPlan(param: deleteBenefitFromPlanDto) {
    const planBenefitId = await this.crudPlansBenefitsService.findOne(
      param.planId,
      param.benefitId,
    );
    await this.crudPlansBenefitsService.delete(planBenefitId.id);
  }
}
