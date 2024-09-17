import { IsString } from "class-validator";

export class CreateExerciseDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    part_workout_id: string;
    @IsString()
    category_id: string;
}
