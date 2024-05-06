import { HttpException, Injectable } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserRepository } from 'src/users/repositories/user.repository';
import { SignInRequestDto } from '../dto/authResponseToken.dto';
import { PasswordService } from '../services/password.service';

@Injectable()
export class AuthUseCase {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async sigIn(payload: SignInRequestDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const verifiyPassword = await this.passwordService.compare(
      payload.password,
      user.password,
    );

    if (!verifiyPassword) {
      throw new HttpException('Invalid password', 400);
    }

    return await this.authService.sigIn({
      sub: user.id,
      email: user.email,
    });
  }
}
