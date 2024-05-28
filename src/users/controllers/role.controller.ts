import { Controller, Get } from '@nestjs/common';
import { CrudRolesUseCase } from '../useCase/crudRolesUseCase';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RoleDto } from '../dto/role.dto';

@Controller('role')
@ApiTags('Role')
export class RoleController {
  constructor(private readonly CrudRoleUseCase: CrudRolesUseCase) {}

  @Get('/')
  @ApiOkResponse({ type: RoleDto })
  async getAllRoles() {
    const data = await this.CrudRoleUseCase.getAll();
    return {
      data,
    };
  }
}
