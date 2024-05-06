import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserRepository } from 'src/users/repositories/user.repository';
import { PasswordService } from './services/password.service';
import { JwtService } from '@nestjs/jwt';
import { AuthUseCase } from './useCase/authUseCase.UseCase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), ConfigModule.forRoot()],
  providers: [
    AuthService,
    UserRepository,
    PasswordService,
    JwtService,
    AuthUseCase,
    AuthGuard,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
