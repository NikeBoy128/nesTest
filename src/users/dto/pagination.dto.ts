import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional } from 'class-validator';
import { OrderConst } from './general.dto';

export class ParamsPaginationDto {
  @ApiPropertyOptional({ enum: OrderConst, default: OrderConst.ASC })
  @IsOptional()
  order?: OrderConst = OrderConst.ASC;

  @ApiProperty({
    type: Number,
    example: '1',
    default: 1,
    required: false,
  })
  @IsOptional()
  page?: number = 1;

  @ApiProperty({
    type: Number,
    example: '10',
    required: false,
    default: 10,
  })
  @IsOptional()
  perPage?: number = 10;

  @ApiProperty({
    type: String,
    example: 'admin',
    required: false,
  })
  @IsOptional()
  search?: string;
}
export interface PageMetaParametersDto {
  pageOptionsDto: ParamsPaginationDto;
  itemCount: number;
}
export class PageMetaDto {
  @ApiProperty()
  readonly page: number;

  @ApiProperty()
  readonly perPage: number;

  @ApiProperty()
  readonly total: number;

  @ApiProperty()
  readonly pageCount: number;

  @ApiProperty()
  readonly hasPreviousPage: boolean;

  @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaParametersDto) {
    this.page = pageOptionsDto.page;
    this.perPage = pageOptionsDto.perPage;
    this.total = itemCount;
    this.pageCount = Math.ceil(this.total / this.perPage);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
export class ResponsePaginationDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty({ type: () => PageMetaDto })
  readonly pagination: PageMetaDto;

  constructor(data: T[], pagination: PageMetaDto) {
    this.data = data;
    this.pagination = pagination;
  }
}
