import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { Organization } from "../../repositorys/entitys/rbac/org.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DefaultOrgCreatorService implements OnApplicationBootstrap {
  constructor(@InjectRepository(Organization) private orgRepository: Repository<Organization>) { }

  async onApplicationBootstrap() {
    await this.orgRepository.save(this.orgRepository.create({ id: 1, displayName: 'test', parentId: null, memberCount: 0, creatorUserId: 1, code: '10001' }));
  }

}