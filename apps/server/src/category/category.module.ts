import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { ContestModule } from '@server/contest/contest.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestEntity } from '@server/contest/entities/contest.entity';
import { TeamEntity } from '@server/team/entities/team.entity';
import { TeamModule } from '@server/team/team.module';
import { WorkoutEntity } from '@server/workout/entities/workout.entity';
import { WorkoutModule } from '@server/workout/workout.module';
import { CategoryEntity } from './entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      ContestEntity,
      TeamEntity,
      WorkoutEntity,
    ]),
    ContestModule,
    TeamModule,
    WorkoutModule,
    forwardRef(() => CategoryModule),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
