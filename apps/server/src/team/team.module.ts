import { Module, forwardRef } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamEntity } from './entities/team.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { ContestEntity } from 'src/contest/entities/contest.entity';
import { ContestModule } from 'src/contest/contest.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity, CategoryEntity, ContestEntity]),
    TeamModule,
    ContestModule,
    forwardRef(() => CategoryModule),
  ],
  exports: [TeamService, TypeOrmModule],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
