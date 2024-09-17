import { PartialType } from '@nestjs/swagger';
import { CreatePartWorkoutDto } from './create-part_workout.dto';

export class UpdatePartWorkoutDto extends PartialType(CreatePartWorkoutDto) {}
