import { Injectable } from '@nestjs/common';
import { CreatePartWorkoutDto } from './dto/create-part_workout.dto';
import { UpdatePartWorkoutDto } from './dto/update-part_workout.dto';

@Injectable()
export class PartWorkoutService {
  create(createPartWorkoutDto: CreatePartWorkoutDto) {
    return 'This action adds a new partWorkout';
  }

  findAll() {
    return `This action returns all partWorkout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partWorkout`;
  }

  update(id: number, updatePartWorkoutDto: UpdatePartWorkoutDto) {
    return `This action updates a #${id} partWorkout`;
  }

  remove(id: number) {
    return `This action removes a #${id} partWorkout`;
  }
}
