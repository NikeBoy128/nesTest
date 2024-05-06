import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthUseCase } from '../useCase/authUseCase.UseCase';
import {
  AuthTokenResponseDto,
  SignInRequestDto,
} from '../dto/authResponseToken.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly autUseCase: AuthUseCase) {}

  @Post('/signin')
  @ApiOkResponse({ type: AuthTokenResponseDto })
  async sigIn(
    @Body() payload: SignInRequestDto,
  ): Promise<AuthTokenResponseDto> {
    console.log('payload', payload);
    return this.autUseCase.sigIn(payload);
  }
}
