import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserQuestions } from './userQuestions.entity';

@Entity('Questions')
export class Questions {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  description: string;

  @OneToMany(() => UserQuestions, (userQuestions) => userQuestions.question)
  userQuestions?: UserQuestions[];
}
