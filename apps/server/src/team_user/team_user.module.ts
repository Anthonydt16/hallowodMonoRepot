import { Module } from '@nestjs/common';
import { TeamUserService } from './team_user.service';
import { TeamUserController } from './team_user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamUserEntity } from './entities/team_user.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamUserEntity, UserEntity]),
    TeamUserModule,
    UserEntity,
  ],
  controllers: [TeamUserController],
  providers: [TeamUserService],
})
export class TeamUserModule {}
