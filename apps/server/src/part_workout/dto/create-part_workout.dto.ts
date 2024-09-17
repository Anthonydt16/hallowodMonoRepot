import { IsString } from "class-validator";

export class CreatePartWorkoutDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    workout_id: string;
}
