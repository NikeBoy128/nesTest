import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { IsString } from 'class-validator';
export class AuthTokenResponseDto {
  @ApiProperty({
    type: String,
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    required: true,
  })
  accesToken: string;

  @ApiProperty({
    type: String,
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    required: true,
  })
  refreshToken: string;
}

export interface tokenPayloadModel {
  sub: number;
  email: string;
}

export class SignInRequestDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'harold@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '12345678',
  })
  @IsString()
  password: string;
}
