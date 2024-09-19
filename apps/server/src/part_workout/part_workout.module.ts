import { Module, forwardRef } from '@nestjs/common';
import { PartWorkoutService } from './part_workout.service';
import { PartWorkoutController } from './part_workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { PartWorkoutEntity } from './entities/part_workout.entity';
import { ExerciseEntity } from 'src/exercise/entities/exercise.entity';
import { WorkoutModule } from 'src/workout/workout.module';
import { ExerciseModule } from 'src/exercise/exercise.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PartWorkoutEntity,
      WorkoutEntity,
      ExerciseEntity,
    ]),
    PartWorkoutModule,
    WorkoutModule,
    forwardRef(() => ExerciseModule),
  ],
  exports: [PartWorkoutService, TypeOrmModule],
  controllers: [PartWorkoutController],
  providers: [PartWorkoutService],
})
export class PartWorkoutModule {}
