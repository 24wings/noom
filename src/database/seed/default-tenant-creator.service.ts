import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { Tenant } from "../repositorys/entitys/rbac/tenant.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DefaultTenantCreatorService implements OnApplicationBootstrap {
  constructor(@InjectRepository(Tenant) private tenantRepository: Repository<Tenant>) { }
  async onApplicationBootstrap() {
    await this.tenantRepository.save(this.tenantRepository.create({ id: 1, name: 'admin', tenancyName: 'admin' }));
  }


}