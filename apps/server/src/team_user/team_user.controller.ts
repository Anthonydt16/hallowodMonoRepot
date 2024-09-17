import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamUserService } from './team_user.service';
import { CreateTeamUserDto } from './dto/create-team_user.dto';
import { UpdateTeamUserDto } from './dto/update-team_user.dto';

@Controller('team-user')
export class TeamUserController {
  constructor(private readonly teamUserService: TeamUserService) {}

  @Post()
  create(@Body() createTeamUserDto: CreateTeamUserDto) {
    return this.teamUserService.create(createTeamUserDto);
  }

  @Get()
  findAll() {
    return this.teamUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamUserDto: UpdateTeamUserDto) {
    return this.teamUserService.update(+id, updateTeamUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamUserService.remove(+id);
  }
}
