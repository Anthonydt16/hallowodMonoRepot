import { IsString } from "class-validator";

export class CreateTeamUserDto {
    @IsString()
    team_id: string;
    @IsString()
    user_id: string;   
}
