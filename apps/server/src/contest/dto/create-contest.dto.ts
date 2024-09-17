import { IsString } from 'class-validator';
export class CreateContestDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  city: string;
  @IsString()
  date: Date;
  @IsString()
  gps_coordinates: string;
}
