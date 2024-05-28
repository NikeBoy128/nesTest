import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../repositories/role.repository';
import { Role } from '../entities/role.entity';

@Injectable()
export class CrudRoleServiceService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(role: Role): Promise<string | number> {
    const result = await this.roleRepository.save(role);

    return result.id;
  }

  async update(role: Role) {
    await this.roleRepository.update(role.id, role);
  }

  async delete(id: number) {
    await this.roleRepository.delete(id);
  }

  async getAll() {
    return this.roleRepository.find();
  }
}
