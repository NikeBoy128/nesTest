import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
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
import { CreateOrUpdateUserDto } from '../dto/user.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly crudUserUseCase: CrudUserUseCase) {}

  @Post('/create')
  @ApiOkResponse({ type: CreatedResponseDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
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
