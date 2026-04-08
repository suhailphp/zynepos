import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'johndoe',
    description: 'The username for login',
  })
  @IsString()
  @MinLength(3)
  username!: string;

  @ApiProperty({
    example: 'password123',
    description: "The user's password",
  })
  @IsString()
  @MinLength(8)
  password!: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
  })
  @IsString()
  fullName!: string;

  @ApiProperty({
    required: false,
    example: 'john@example.com',
    description: "The user's email address",
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    required: false,
    example: '1234567890',
    description: "The user's mobile number",
  })
  @IsString()
  @IsOptional()
  mobile?: string;

  @ApiProperty({
    required: false,
    example: '1234',
    description: 'A 4-digit PIN for quick access',
  })
  @IsString()
  @MinLength(4)
  @IsOptional()
  pin?: string;

  @ApiProperty({
    required: false,
    example: true,
    description: 'Whether the user account is active',
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({
    required: false,
    example: 25.5,
    description: "The user's hourly wage",
  })
  @IsNumber()
  @IsOptional()
  hourlyRate?: number;

  @ApiProperty({
    required: false,
    example: 1,
    description: 'The ID of the outlet this user belongs to',
  })
  @IsNumber()
  @IsOptional()
  outletId?: number;

  @ApiProperty({
    required: false,
    example: ['CAN_PROCESS_SALE', 'CAN_OPEN_DRAWER'],
    description: 'Specific user permissions',
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  permissions?: string[];
}
