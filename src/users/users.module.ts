import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { CrudUsersService } from './services/crudUsers.service';
import { CrudUserUseCase } from './useCase/crudUserUseCase.useCase';
import { PasswordService } from 'src/auth/services/password.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [],
  providers: [
    UserRepository,
    CrudUsersService,
    CrudUserUseCase,
    PasswordService,
    AuthGuard,
    JwtService,
  ],
  controllers: [UserController],
})
export class UsersModule {}
