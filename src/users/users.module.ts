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
import { CrudRoleServiceService } from './services/crudRoleService.service';
import { RoleRepository } from './repositories/role.repository';
import { CrudRolesUseCase } from './useCase/crudRolesUseCase';
import { RoleController } from './controllers/role.controller';
import { CrudPlansBenefitsService } from './services/crudplansbenefits.service';
import { BenefitsRepository } from './repositories/benefits.repository';
import { PlansBenefitsRepository } from './repositories/plansBenefits.repository';
import { InscripcionsRepository } from './repositories/inscripcions.repository';
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
    CrudRoleServiceService,
    RoleRepository,
    CrudRolesUseCase,
    CrudPlansBenefitsService,
    BenefitsRepository,
    PlansBenefitsRepository,
    InscripcionsRepository,
  ],
  controllers: [UserController, PlansController, RoleController],
})
export class UsersModule {}
