import { Injectable } from '@nestjs/common';
import { CrudRoleServiceService } from '../services/crudRoleService.service';
import { RoleDto } from '../dto/role.dto';
import { Role } from '../entities/role.entity';

@Injectable()
export class CrudRolesUseCase {
  constructor(private readonly crudRolesService: CrudRoleServiceService) {}

  async create(roleDto: RoleDto): Promise<string | number> {
    const role: Role = {
      id: roleDto.id,
      name: roleDto.name,
    };

    return this.crudRolesService.create(role);
  }

  async getAll() {
    return this.crudRolesService.getAll();
  }
}
