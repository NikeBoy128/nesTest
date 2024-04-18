import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plans } from './plans.entity';
import { Benefits } from './benefits.entity';

@Entity({ name: 'PlansBenefits' })
export class PlansBenefits {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'bigint', nullable: false })
  planId: number;

  @Column({ type: 'bigint', nullable: false })
  benefitId: number;

  @ManyToOne(() => Plans, (plan) => plan.plansBenefits)
  plan?: Plans;

  @ManyToOne(() => Benefits, (benefit) => benefit.plansBenefits)
  benefit?: Benefits;
}
