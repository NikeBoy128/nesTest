import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CrudPlansUseCase } from '../useCase/curdPlanUseCase.useCase';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CREATEDMESSAGE, CreatedResponseDto } from '../messages/globalConst';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateOrUpdatePlanDto } from '../dto/plans.dto';

@Controller('plans')
@ApiTags('Plans')
export class PlansController {
  constructor(private readonly plansUseCase: CrudPlansUseCase) {}

  @Post('/')
  @ApiOkResponse({ type: CreatedResponseDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async create(
    @Body() planDto: CreateOrUpdatePlanDto,
  ): Promise<CreatedResponseDto> {
    const rowId = await this.plansUseCase.create(planDto);
    return {
      message: CREATEDMESSAGE,
      codeStatus: HttpStatus.CREATED,
      rowId: rowId,
    };
  }

  @Get('/')
  @ApiOkResponse({ type: CreatedResponseDto })
  async getPlans() {
    const plans = await this.plansUseCase.getPlanes();
    return {
      data: plans,
    };
  }
}
