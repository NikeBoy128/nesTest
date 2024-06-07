import { ApiProperty } from '@nestjs/swagger';

export class InscripcionDto {
  @ApiProperty({
    type: 'number',
    required: false,
    example: 1,
  })
  id?: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 1,
  })
  userId: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 1,
  })
  planId: number;
}
