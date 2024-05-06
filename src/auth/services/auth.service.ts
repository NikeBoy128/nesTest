import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { tokenPayloadModel } from '../dto/authResponseToken.dto';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async sigIn(payload: tokenPayloadModel) {
    const secretKey = this.configService.get('JWT_SECRET_KEY');
    const accesToken = this.jwtService.sign(payload, { secret: secretKey });
    const refreshToken = this.jwtService.sign(
      {
        sub: payload.sub,
      },
      {
        secret: secretKey,
        expiresIn: '7d',
      },
    );

    return {
      accesToken,
      refreshToken,
    };
  }
}
