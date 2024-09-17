import { IsString } from "class-validator";

export class CreateWorkoutDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    contest_id: string;
}
