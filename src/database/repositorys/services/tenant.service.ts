import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tenant } from "../entitys/rbac/tenant.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TenantService {
  constructor(@InjectRepository(Tenant) private tenantRepository: Repository<Tenant>) { }


  findAndCount(take: number = 10, skip: number = 0) {
    return this.tenantRepository.findAndCount({ skip, take });
  }

  findById(id: number) {
    return this.tenantRepository.findOne(id);
  }
  update(tenant: Tenant) {
    return this.tenantRepository.update(tenant.id, tenant);
  }

}