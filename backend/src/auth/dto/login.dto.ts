import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
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
}
