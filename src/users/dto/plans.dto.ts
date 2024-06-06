import { ApiProperty } from '@nestjs/swagger';

export class CreateOrUpdatePlanDto {
  @ApiProperty({
    type: 'number',
    required: false,
    example: 1,
  })
  id: number;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Plan name',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Plan price',
  })
  price: string;

  @ApiProperty({
    type: 'string',
    required: true,
    example: 'Plan description',
  })
  description: string;

  @ApiProperty({
    type: 'string',
    required: false,
    example: 'Plan image',
  })
  image: string;
}
export class AddBenefitToPlanDto {
  @ApiProperty({
    type: 'number',
    required: true,
    example: 1,
  })
  planId: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 1,
  })
  benefitId: number;
}
export class deleteBenefitFromPlanDto {
  @ApiProperty({
    type: 'number',
    required: true,
    example: 1,
  })
  planId: number;

  @ApiProperty({
    type: 'number',
    required: true,
    example: 1,
  })
  benefitId: number;
}
