import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { tokenPayloadModel } from '../dto/authResponseToken.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async sigIn(payload: tokenPayloadModel) {
    const accesToken = this.jwtService.sign(payload);

    const refreshToken = this.jwtService.sign({
      sub: payload.sub,
      expiresIn: '7d',
    });

    return { accesToken, refreshToken };
  }
}
