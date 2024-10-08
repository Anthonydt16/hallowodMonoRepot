import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name!: string;
  @IsString()
  description!: string;
  @IsString()
  contest_id!: string;
}
