import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Organization } from "../../entitys/rbac/org.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class OrgService {

  constructor(@InjectRepository(Organization) private orgRepository: Repository<Organization>) { }

  findAll() {
    return this.orgRepository.find();
  }

  findOneWithUsers(id: number) {
    return this.orgRepository.findOne(id, { relations: ['users'] });
  }
  findOneWithRoles(id: number) {
    return this.orgRepository.findOne(id, { relations: ['roles'] });
  }
  save(org: Organization) {
    return this.orgRepository.save(org);
  }
}