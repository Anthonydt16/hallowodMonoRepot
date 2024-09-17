import { Test, TestingModule } from '@nestjs/testing';
import { PartWorkoutController } from './part_workout.controller';
import { PartWorkoutService } from './part_workout.service';

describe('PartWorkoutController', () => {
  let controller: PartWorkoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartWorkoutController],
      providers: [PartWorkoutService],
    }).compile();

    controller = module.get<PartWorkoutController>(PartWorkoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
