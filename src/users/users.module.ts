import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { CrudUsersService } from './services/crudUsers.service';
import { CrudUserUseCase } from './useCase/crudUserUseCase.useCase';
import { PasswordService } from 'src/auth/services/password.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { UserQuestionsRepository } from './repositories/userQuestions.repository';
import { PlansController } from './controllers/plans.controller';
import { PlansRepository } from './repositories/plans.repository';
import { CrudPlansUseCase } from './useCase/curdPlanUseCase.useCase';
import { CrudPlanService } from './services/crudPlan.service';
import { GetAllUsersPaginationService } from './services/getAllUsersPagination.service';
import { getAllUsersUseCase } from './useCase/getAllUsers.useCase';
@Module({
  imports: [],
  providers: [
    UserRepository,
    CrudUsersService,
    CrudUserUseCase,
    PasswordService,
    AuthGuard,
    JwtService,
    UserQuestionsRepository,
    PlansRepository,
    CrudUsersService,
    CrudPlansUseCase,
    CrudPlanService,
    GetAllUsersPaginationService,
    getAllUsersUseCase,
  ],
  controllers: [UserController, PlansController],
})
export class UsersModule {}
