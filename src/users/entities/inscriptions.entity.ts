import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plans } from './plans.entity';
import { Users } from './users.entity';
@Entity({ name: 'Inscripcions' })
export class Inscripcions {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'bigint', nullable: false })
  userId: number;

  @Column({ type: 'bigint', nullable: false })
  planId: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  registerDate?: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  createdAt?: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt?: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt?: Date;

  @ManyToOne(() => Users, (user) => user.inscripcions)
  user?: Users;

  @ManyToOne(() => Plans, (plan) => plan.inscripcions)
  plan?: Plans;
}
