import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CrudUserUseCase } from '../useCase/crudUserUseCase.useCase';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CREATEDMESSAGE, CreatedResponseDto } from '../messages/globalConst';
import {
  CreateOrUpdateUserDto,
  ParamsUsersWhithPagination,
} from '../dto/user.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { getAllUsersUseCase } from '../useCase/getAllUsers.useCase';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private readonly crudUserUseCase: CrudUserUseCase,
    private readonly getAllUsersPaginationUseCase: getAllUsersUseCase,
  ) {}

  @Post('/create')
  @ApiOkResponse({ type: CreatedResponseDto })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async create(
    @Body() userDto: CreateOrUpdateUserDto,
  ): Promise<CreatedResponseDto> {
    const rowId = await this.crudUserUseCase.create(userDto);

    return {
      message: CREATEDMESSAGE,
      codeStatus: HttpStatus.CREATED,
      rowId: rowId,
    };
  }
  @Get('/users-whit-pagination')
  async getAllUsersPagination(@Query() params: ParamsUsersWhithPagination) {
    const data = await this.getAllUsersPaginationUseCase.run(params);
    return {
      data,
    };
  }
  @Get('/getquestionsbyemail:email')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getQuestionsByUserId(@Param('email') email: string) {
    const data = await this.crudUserUseCase.getQuestionsByUserId(email);

    return {
      data,
    };
  }
}
