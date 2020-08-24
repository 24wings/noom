import { Repository } from "typeorm";
import { Role } from "../../repositorys/entitys/rbac/role.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, OnApplicationBootstrap } from "@nestjs/common";

@Injectable()
export class DefaultRoleCreatorService implements OnApplicationBootstrap {
  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) { }
  async onApplicationBootstrap() {
    await this.roleRepository.save(this.roleRepository.create({ id: 1, name: "Admin", displayName: 'Admin', isDefault: true, isStatic: true }))
  }




}