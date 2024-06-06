import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CrudPlansUseCase } from '../useCase/curdPlanUseCase.useCase';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  CREATEDMESSAGE,
  CreatedResponseDto,
  DELETEDMESSAGE,
  DeletedResponseDto,
} from '../messages/globalConst';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import {
  AddBenefitToPlanDto,
  CreateOrUpdatePlanDto,
  deleteBenefitFromPlanDto,
} from '../dto/plans.dto';

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

  @Post('/add-benefit')
  @ApiOkResponse({ type: CreatedResponseDto })
  async addBenefitToPlan(
    @Body() plansBenefit: AddBenefitToPlanDto,
  ): Promise<CreatedResponseDto> {
    const rowId = await this.plansUseCase.addBenefitToPlan(plansBenefit);
    return {
      message: CREATEDMESSAGE,
      codeStatus: HttpStatus.CREATED,
      rowId: rowId,
    };
  }

  @Get('/benefits/:planId')
  async getBenefitsByPlanId(@Param('planId') planId: number) {
    const benefits = await this.plansUseCase.getBenefitsByPlanId(planId);
    return {
      data: benefits,
    };
  }

  @Delete('/benefits')
  async deleteBenefit(
    @Query() param: deleteBenefitFromPlanDto,
  ): Promise<DeletedResponseDto> {
    await this.plansUseCase.deleteBenefitFromPlan(param);
    return {
      message: DELETEDMESSAGE,
      codeStatus: HttpStatus.OK,
    };
  }
}
