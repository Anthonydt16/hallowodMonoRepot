import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartWorkoutService } from './part_workout.service';
import { CreatePartWorkoutDto } from './dto/create-part_workout.dto';
import { UpdatePartWorkoutDto } from './dto/update-part_workout.dto';

@Controller('part-workout')
export class PartWorkoutController {
  constructor(private readonly partWorkoutService: PartWorkoutService) {}

  @Post()
  create(@Body() createPartWorkoutDto: CreatePartWorkoutDto) {
    return this.partWorkoutService.create(createPartWorkoutDto);
  }

  @Get()
  findAll() {
    return this.partWorkoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partWorkoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartWorkoutDto: UpdatePartWorkoutDto) {
    return this.partWorkoutService.update(+id, updatePartWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partWorkoutService.remove(+id);
  }
}
