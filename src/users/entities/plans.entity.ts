import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Inscripcions } from './inscriptions.entity';
import { PlansBenefits } from './plansBenefits.entity';

@Entity({ name: 'Plans' })
export class Plans {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 100,
  })
  name: string;

  @Column('varchar', {
    length: 100,
  })
  price: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  description: string;

  @Column('varchar', {
    length: 500,
    nullable: true,
  })
  image: string;
  @OneToMany(() => Inscripcions, (inscripcions) => inscripcions.plan)
  inscripcions?: Inscripcions[];

  @OneToMany(() => PlansBenefits, (plansBenefits) => plansBenefits.plan)
  plansBenefits?: PlansBenefits[];
}
