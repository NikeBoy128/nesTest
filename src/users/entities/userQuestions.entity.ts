import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';
import { Questions } from './questions.entity';

@Entity('UserQuestions')
export class UserQuestions {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column({ type: 'bigint', nullable: false })
  userId: number;

  @Column({ type: 'bigint', nullable: false })
  questionId: number;

  @Column({
    type: 'varchar',
    length: '255',
    nullable: false,
  })
  answer: string;
  @ManyToOne(() => Users, (user) => user.userQuestions)
  user?: Users;

  @ManyToOne(() => Questions, (question) => question.userQuestions)
  question?: Questions;
}
