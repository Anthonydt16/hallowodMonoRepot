import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestEntity } from '@server/contest/entities/contest.entity';
import { PartWorkoutEntity } from '@server/part_workout/entities/part_workout.entity';
import { WorkoutEntity } from './entities/workout.entity';

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
