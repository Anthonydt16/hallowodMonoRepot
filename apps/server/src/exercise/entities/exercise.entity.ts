import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BaseModel } from '../../utils/baseModel';
import { PartWorkoutEntity } from '../../part_workout/entities/part_workout.entity';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity('exercise')
export class ExerciseEntity extends BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @Column('uuid')
  partWorkoutId: string;

  @ManyToOne(() => PartWorkoutEntity, (partWorkout) => partWorkout.exercises)
  partWorkout: PartWorkoutEntity;

  @Column('uuid')
  categoryId: string;

  @ManyToOne(() => CategoryEntity, (category) => category.exercises)
  category: CategoryEntity;
}
