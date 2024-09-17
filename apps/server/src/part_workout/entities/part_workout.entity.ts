import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../utils/baseModel';
import { ExerciseEntity } from '../../exercise/entities/exercise.entity';
import { WorkoutEntity } from '../../workout/entities/workout.entity';
export enum typePartWorkout {
  FORTIME = 'FORTIME',
  AMRAP = 'AMRAP',
  EMOM = 'EMOM',
  INTERVAL = 'INTERVAL',
  TABATA = 'TABATA',
}

@Entity('part_workout')
export class PartWorkoutEntity extends BaseModel {
  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('uuid')
  workoutId: string;

  @ManyToOne(() => WorkoutEntity, (workout) => workout.partWorkouts)
  workout: WorkoutEntity;

  @Column({
    type: 'enum',
    enum: [
      typePartWorkout.FORTIME,
      typePartWorkout.AMRAP,
      typePartWorkout.EMOM,
      typePartWorkout.INTERVAL,
      typePartWorkout.TABATA,
    ],
  })
  type: string;

  @Column()
  duration: string;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.category)
  exercises: ExerciseEntity[];
}
