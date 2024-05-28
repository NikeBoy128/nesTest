import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({
    type: 'number',
    required: false,
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Admin',
  })
  name: string;
}
