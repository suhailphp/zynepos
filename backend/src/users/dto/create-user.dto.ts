import { IsString, IsEmail, MinLength, IsOptional, IsNumber, IsArray, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  username: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  fullName: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  mobile?: string;

  @IsString()
  @MinLength(4)
  @IsOptional()
  pin?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsNumber()
  @IsOptional()
  hourlyRate?: number;

  @IsNumber()
  @IsOptional()
  outletId?: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  permissions?: string[];
}
