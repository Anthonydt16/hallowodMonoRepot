import { IsString } from "class-validator";

export class CreateTeamDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    contest_id: string;
    @IsString()
    category_id: string;
}
