import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Inscripcions } from './inscriptions.entity';
import { UserQuestions } from './userQuestions.entity';
import { Role } from './role.entity';

@Entity('Users')
export class Users {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 100,
  })
  name: string;

  @Column('varchar', {
    length: 100,
  })
  lastName: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  avatarUrl?: string;

  @Column('varchar', {
    length: 255,
  })
  email: string;

  @Column({ type: 'bigint', nullable: false })
  roleId: number;
  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  password: string;

  @Column('boolean', {
    default: true,
  })
  isActive?: boolean;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  deletedAt?: Date;

  @OneToMany(() => Inscripcions, (inscripcions) => inscripcions.user)
  inscripcions?: Inscripcions[];

  @OneToMany(() => UserQuestions, (userQuestions) => userQuestions.user)
  userQuestions?: UserQuestions[];

  @ManyToOne(() => Role, (role) => role.users)
  role?: Role;
}
