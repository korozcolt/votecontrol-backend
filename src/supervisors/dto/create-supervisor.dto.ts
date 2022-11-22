import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator';

export class CreateSupervisorDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  dni?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  phoneTwo?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsOptional()
  @IsIn(['true', 'false'])
  isActive?: boolean;

  constructor(object: CreateSupervisorDto) {
    Object.assign(this, object);
  }
}
