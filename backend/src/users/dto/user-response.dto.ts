import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  username!: string;

  @ApiProperty()
  fullName!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  mobile!: string;

  @ApiProperty()
  isActive!: boolean;

  @ApiProperty()
  hourlyRate!: number;

  @ApiProperty()
  outletId!: number;

  @ApiProperty()
  permissions!: string[];

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
