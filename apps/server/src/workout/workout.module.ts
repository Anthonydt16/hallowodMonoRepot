import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './entities/workout.entity';
import { ContestEntity } from 'src/contest/entities/contest.entity';
import { PartWorkoutEntity } from 'src/part_workout/entities/part_workout.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutEntity, ContestEntity, PartWorkoutEntity]),
    WorkoutModule,
  ],
  exports: [WorkoutService, TypeOrmModule],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
