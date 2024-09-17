import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestService } from './contest.service';
import { ContestController } from './contest.controller';
import { ContestEntity } from './entities/contest.entity';
import { WorkoutEntity } from '@server/workout/entities/workout.entity';
import { CategoryEntity } from '@server/category/entities/category.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ContestEntity, WorkoutEntity, CategoryEntity]),
    ContestModule,
  ],
  controllers: [ContestController],
  providers: [ContestService],
  exports: [ContestService, TypeOrmModule], // Exporte ContestService pour une utilisation éventuelle dans d'autres modules
})
export class ContestModule {}
