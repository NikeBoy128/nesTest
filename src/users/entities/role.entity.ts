import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity('Role')
export class Role {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @OneToMany(() => Users, (users) => users.role)
  users?: Users[];
}
