import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseModel } from '../../utils/baseModel';
import { ContestEntity } from '../../contest/entities/contest.entity';
import { CategoryEntity } from '../../category/entities/category.entity';
import { TeamUserEntity } from '../../team_user/entities/team_user.entity';

@Entity('team')
export class TeamEntity extends BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @Column('uuid')
  contestId: string;

  @ManyToOne(() => ContestEntity, (contest) => contest.teams)
  contest: ContestEntity;

  @Column('uuid')
  categoryId: string;

  @ManyToOne(() => CategoryEntity, (category) => category.teams)
  category: CategoryEntity;

  @OneToMany(() => TeamUserEntity, (teamUser) => teamUser.team)
  users: TeamUserEntity[];
}
