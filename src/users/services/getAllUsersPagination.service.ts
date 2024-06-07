import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import {
  ParamsUsersWhithPagination,
  paramsInscripcionsWhithPagination,
} from '../dto/user.dto';
import { Users } from '../entities/users.entity';
import { PageMetaDto, ResponsePaginationDto } from '../dto/pagination.dto';
import { Inscripcions } from '../entities/inscriptions.entity';
import { InscripcionsRepository } from '../repositories/inscripcions.repository';

@Injectable()
export class GetAllUsersPaginationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly inscripcionsRepository: InscripcionsRepository,
  ) {}

  async run(
    params: ParamsUsersWhithPagination,
  ): Promise<ResponsePaginationDto<Users>> {
    const skip = (params.page - 1) * params.perPage;

    const userQueryBuilder = this.userRepository.createQueryBuilder('Users');

    userQueryBuilder
      .innerJoinAndSelect('Users.role', 'Role')
      .orderBy('Users.createdAt', 'DESC')
      .skip(skip)
      .take(params.perPage)
      .getMany();

    if (params.search) {
      userQueryBuilder.andWhere(
        'Users.name LIKE :search OR Users.lastName LIKE :search OR Users.email LIKE :search',
        {
          search: `%${params.search}%`,
        },
      );
    }

    if (params.roleId) {
      userQueryBuilder.andWhere('Users.roleId = :roleId', {
        roleId: params.roleId,
      });
    }

    const itemCount = await userQueryBuilder.getCount();
    const { entities } = await userQueryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto: params });

    return new ResponsePaginationDto(entities, pageMetaDto);
  }

  async runInscripcions(
    params: paramsInscripcionsWhithPagination,
  ): Promise<ResponsePaginationDto<Inscripcions>> {
    const skip = (params.page - 1) * params.perPage;

    const inscripcionsQueryBuilder =
      this.inscripcionsRepository.createQueryBuilder('Inscripcions');

    inscripcionsQueryBuilder
      .innerJoinAndSelect('Inscripcions.user', 'Users')
      .innerJoinAndSelect('Inscripcions.plan', 'Plans')
      .orderBy('Inscripcions.createdAt', 'DESC')
      .skip(skip)
      .take(params.perPage)
      .getMany();

    if (params.search) {
      inscripcionsQueryBuilder.andWhere(
        'Users.name LIKE :search OR Users.lastName LIKE :search OR Users.email LIKE :search',
        {
          search: `%${params.search}%`,
        },
      );
    }
    if (params.planId) {
      inscripcionsQueryBuilder.andWhere('Inscripcions.planId = :planId', {
        planId: params.planId,
      });
    }

    const itemCount = await inscripcionsQueryBuilder.getCount();
    const { entities } = await inscripcionsQueryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto: params });

    return new ResponsePaginationDto(entities, pageMetaDto);
  }
}
