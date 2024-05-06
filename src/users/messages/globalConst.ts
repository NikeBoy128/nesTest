import { ApiProperty } from '@nestjs/swagger';

export class CreatedResponseDto {
  @ApiProperty({
    type: 'strng',
    example: 'Informacion Almacenada Correctamente',
    required: false,
  })
  message: string;

  @ApiProperty({
    type: 'number',
    example: 200,
    required: false,
  })
  codeStatus: number;

  @ApiProperty({
    type: 'number',
    example: 1,
    required: false,
  })
  rowId: number | string;
}

export class UpdatedResponseDto {
  @ApiProperty({
    type: 'strng',
    example: 'Informacion Actualizada Correctamente',
    required: false,
  })
  message: string;

  @ApiProperty({
    type: 'number',
    example: 200,
    required: false,
  })
  codeStatus: number;
}

export class DeletedResponseDto {
  @ApiProperty({
    type: 'strng',
    example: 'Informacion Eliminada Correctamente',
    required: false,
  })
  message: string;

  @ApiProperty({
    type: 'number',
    example: 200,
    required: false,
  })
  codeStatus: number;
}

export const CREATEDMESSAGE = 'Informacion Almacenada Correctamente';
export const UPDATEDMESSAGE = 'Informacion Actualizada Correctamente';
export const DELETEDMESSAGE = 'Informacion Eliminada Correctamente';
export const DEFAULT_STRATEGY = 'jwt';
