import { ContestEntity } from '../../contest/entities/contest.entity';
import { ExerciseEntity } from '../../exercise/entities/exercise.entity';
import { TeamEntity } from '../../team/entities/team.entity';
import { BaseModel } from '../../utils/baseModel';
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity('category')
export class CategoryEntity extends BaseModel {
  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  ageMin: number;

  @Column('int')
  ageMax: number;

  @Column('int')
  nbTeamMax: number;

  @Column('int')
  nbPersonMaxByTeam: number;

  @Column('uuid')
  contestId: string;

  @ManyToOne(() => ContestEntity, (contest) => contest.categorys)
  contest: ContestEntity;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.category)
  exercises: ExerciseEntity[];

  @OneToMany(() => TeamEntity, (team) => team.category)
  teams: TeamEntity[];
}
