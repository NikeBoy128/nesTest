import { Injectable } from '@nestjs/common';
import { PlansBenefitsRepository } from '../repositories/plansBenefits.repository';
import { PlansBenefits } from '../entities/plansBenefits.entity';
import { BenefitsRepository } from '../repositories/benefits.repository';

@Injectable()
export class CrudPlansBenefitsService {
  constructor(
    private readonly crudPlansBenefits: PlansBenefitsRepository,
    private readonly benefitsRepository: BenefitsRepository,
  ) {}

  async create(plansBenefits: PlansBenefits): Promise<string | number> {
    const newPlansBenefits = await this.crudPlansBenefits.save(plansBenefits);
    return newPlansBenefits.id;
  }

  async getAllBenefits() {
    const benefits = await this.benefitsRepository.find();
    return benefits;
  }

  async getBenefitsByPlanId(planId: number) {
    const benefits = await this.crudPlansBenefits.find({
      where: { planId },
      relations: ['benefit'],
    });
    return benefits;
  }

  async delete(id: number) {
    await this.crudPlansBenefits.delete(id);
  }

  async findOne(planId: number, benefitId: number) {
    const plansBenefits = await this.crudPlansBenefits.findOne({
      where: { planId, benefitId },
    });
    return plansBenefits;
  }
}
