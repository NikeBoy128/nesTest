import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { CrudUsersService } from './services/crudUsers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserRepository, CrudUsersService],
  controllers: [UserController],
})
export class UsersModule {}
