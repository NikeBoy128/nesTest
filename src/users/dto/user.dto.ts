import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ParamsPaginationDto } from './pagination.dto';

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
    type: 'number',
    required: true,
    example: 1,
  })
  @IsNumber()
  roleId: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'password',
  })
  @IsString()
  password: string;
}

export class ParamsUsersWhithPagination extends ParamsPaginationDto {
  @ApiProperty({
    type: Number,
    example: '1',
    required: false,
  })
  @IsOptional()
  roleId?: number;
}
