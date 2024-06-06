import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
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
import {
  CREATEDMESSAGE,
  CreatedResponseDto,
  DELETEDMESSAGE,
  DeletedResponseDto,
  UPDATEDMESSAGE,
  UpdatedResponseDto,
} from '../messages/globalConst';
import {
  CreateOrUpdateUserDto,
  ParamsUsersWhithPagination,
  paramsInscripcionsWhithPagination,
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

  @Patch('/:id')
  @ApiOkResponse({ type: UpdatedResponseDto })
  async update(
    @Body() user: CreateOrUpdateUserDto,
  ): Promise<UpdatedResponseDto> {
    await this.crudUserUseCase.update(user);

    return {
      message: UPDATEDMESSAGE,
      codeStatus: HttpStatus.OK,
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

  @Delete('/delete:id')
  async deleteUser(@Param('id') id: number): Promise<DeletedResponseDto> {
    await this.crudUserUseCase.delete(id);
    return {
      message: DELETEDMESSAGE,
      codeStatus: HttpStatus.OK,
    };
  }

  @Get('/inscripcions-whit-pagination')
  async getAllInscripcionsPagination(
    @Query() params: paramsInscripcionsWhithPagination,
  ) {
    const data =
      await this.getAllUsersPaginationUseCase.runInscripcions(params);
    return {
      data,
    };
  }
}
