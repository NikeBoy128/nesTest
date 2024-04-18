import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlansBenefits } from './plansBenefits.entity';
@Entity({ name: 'Benefits' })
export class Benefits {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 100,
  })
  description?: string;

  @OneToMany(() => PlansBenefits, (plansBenefits) => plansBenefits.benefit)
  plansBenefits?: PlansBenefits[];
}
