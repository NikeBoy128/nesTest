import { Injectable } from '@nestjs/common';
import { CrudUsersService } from '../services/crudUsers.service';
import { CreateOrUpdateUserDto } from '../dto/user.dto';
import { Users } from '../entities/users.entity';
import { PasswordService } from 'src/auth/services/password.service';

@Injectable()
export class CrudUserUseCase {
  constructor(
    private readonly crudUserService: CrudUsersService,
    private readonly passwordService: PasswordService,
  ) {}

  async create(userDto: CreateOrUpdateUserDto): Promise<string | number> {
    const newUser: Users = {
      id: userDto.id,
      name: userDto.name,
      lastName: userDto.lastName,
      avatarUrl: userDto.avatarUrl,
      email: userDto.email,
      password: userDto.password,
      roleId: userDto.roleId,
    };

    newUser.password = await this.passwordService.hash(newUser.password);

    await this.crudUserService.create(newUser);

    return newUser.id;
  }
  async update(userDto: CreateOrUpdateUserDto) {
    const user: Users = {
      id: userDto.id,
      name: userDto.name,
      lastName: userDto.lastName,
      avatarUrl: userDto.avatarUrl,
      email: userDto.email,
      password: userDto.password,
      roleId: userDto.roleId,
    };

    if (user.password) {
      user.password = await this.passwordService.hash(user.password);
    }

    await this.crudUserService.update(user);
  }

  async getQuestionsByUserId(email: string) {
    const user = await this.crudUserService.findUserByEmail(email);
    const questions = await this.crudUserService.getQuestionsByUserId(user.id);

    return questions;
  }

  async delete(id: number) {
    await this.crudUserService.delete(id);
  }
}
