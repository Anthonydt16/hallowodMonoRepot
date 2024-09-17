import { CategoryEntity } from '../../category/entities/category.entity';
import { TeamEntity } from '../../team/entities/team.entity';
import { BaseModel } from '../../utils/baseModel';
import { WorkoutEntity } from '../../workout/entities/workout.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({
  name: 'contest',
})
export class ContestEntity extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  city: string;

  @Column()
  date: Date;

  @Column()
  gps_coordinates: string;

  @OneToMany(() => WorkoutEntity, (workout) => workout.contest)
  workouts: WorkoutEntity[];

  @OneToMany(() => CategoryEntity, (category) => category.contest)
  categorys: CategoryEntity[];

  @OneToMany(() => TeamEntity, (team) => team.contest)
  teams: TeamEntity[];
}
