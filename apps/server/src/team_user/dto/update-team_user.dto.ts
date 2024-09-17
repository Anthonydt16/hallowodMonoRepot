import { PartialType } from '@nestjs/swagger';
import { CreateTeamUserDto } from './create-team_user.dto';

export class UpdateTeamUserDto extends PartialType(CreateTeamUserDto) {}
