import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrUpdateUserDto {
  @ApiProperty({
    type: 'number',
    required: false,
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'John Doe',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'John Doe',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    type: 'string',
    required: false,
    example: 'image.jpg',
  })
  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'jhonDoe@gmail.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'password',
  })
  @IsString()
  password: string;
}
