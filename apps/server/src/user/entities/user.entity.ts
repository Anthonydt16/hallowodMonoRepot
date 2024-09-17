import { TeamUserEntity } from '../../team_user/entities/team_user.entity';
import { BaseModel } from '../../utils/baseModel';
import { Entity, Column, ManyToMany } from 'typeorm';

export enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user',
  Owner = 'owner',
}

@Entity({
  name: 'users',
})
export class UserEntity extends BaseModel {
  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column()
  email: string;

  @Column({
    name: 'password',
  })
  passwordHash: string;

  @Column()
  token: string;

  @Column({
    name: 'role',
  })
  role: RoleEnum;

  @ManyToMany(() => TeamUserEntity, (teamUser) => teamUser.user)
  teams: TeamUserEntity[];
}
