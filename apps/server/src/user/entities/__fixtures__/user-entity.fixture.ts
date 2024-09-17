import { RoleEnum, UserEntity } from '../user.entity';

export const mockUserEntity: UserEntity = {
  //generer l'id format uuid
  id: 'a1b2c3d4',
  email: 'email',
  lastName: 'lName',
  firstName: 'fName',
  token: 'token',
  passwordHash: 'password',
  role: RoleEnum.USER,
  teams: [],
  created_at: new Date(),
  deleted_at: null,
};
