import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { ContestModule } from 'src/contest/contest.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContestEntity } from 'src/contest/entities/contest.entity';
import { TeamEntity } from 'src/team/entities/team.entity';
import { TeamModule } from 'src/team/team.module';
import { WorkoutEntity } from 'src/workout/entities/workout.entity';
import { WorkoutModule } from 'src/workout/workout.module';
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
