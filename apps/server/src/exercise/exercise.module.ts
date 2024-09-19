import { Module, forwardRef } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './entities/exercise.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { PartWorkoutEntity } from 'src/part_workout/entities/part_workout.entity';
import { CategoryModule } from 'src/category/category.module';
import { PartWorkoutModule } from 'src/part_workout/part_workout.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ExerciseEntity,
      CategoryEntity,
      PartWorkoutEntity,
    ]),
    ExerciseModule,
    CategoryModule,
    forwardRef(() => PartWorkoutModule),
  ],
  exports: [ExerciseService, TypeOrmModule],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}
