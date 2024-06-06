import { Injectable } from '@nestjs/common';
import { GetAllUsersPaginationService } from '../services/getAllUsersPagination.service';
import {
  ParamsUsersWhithPagination,
  paramsInscripcionsWhithPagination,
} from '../dto/user.dto';

@Injectable()
export class getAllUsersUseCase {
  constructor(
    private readonly getAllUsersPaginationService: GetAllUsersPaginationService,
  ) {}

  async run(params: ParamsUsersWhithPagination) {
    return this.getAllUsersPaginationService.run(params);
  }

  async runInscripcions(params: paramsInscripcionsWhithPagination) {
    return this.getAllUsersPaginationService.runInscripcions(params);
  }
}
