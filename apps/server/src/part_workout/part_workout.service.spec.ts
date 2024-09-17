import { Test, TestingModule } from '@nestjs/testing';
import { PartWorkoutService } from './part_workout.service';

describe('PartWorkoutService', () => {
  let service: PartWorkoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartWorkoutService],
    }).compile();

    service = module.get<PartWorkoutService>(PartWorkoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
