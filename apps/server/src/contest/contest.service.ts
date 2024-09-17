import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContestDto } from './dto/create-contest.dto';
import { UpdateContestDto } from './dto/update-contest.dto';
import { ContestEntity } from './entities/contest.entity';

@Injectable()
export class ContestService {
  constructor(
    @InjectRepository(ContestEntity)
    private contestRepository: Repository<ContestEntity>,
  ) {}

  async create(createContestDto: CreateContestDto): Promise<ContestEntity> {
    const contest = this.contestRepository.create(createContestDto);
    return this.contestRepository.save(contest);
  }

  findAll(): Promise<ContestEntity[] | null> {
    return this.contestRepository.find();
  }

  findOne(id: string): Promise<ContestEntity | null> {
    return this.contestRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateContestDto: UpdateContestDto,
  ): Promise<ContestEntity | null> {
    await this.contestRepository.update(id, updateContestDto);
    return this.contestRepository.findOneBy({ id });
  }

  remove(id: string): void {
    this.contestRepository.delete(id);
  }
}
