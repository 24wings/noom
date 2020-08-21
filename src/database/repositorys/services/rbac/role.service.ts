import { Injectable } from "@nestjs/common";
import { Role } from "../../entitys/rbac/role.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) { }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }
  findById(id: number) {
    return this.roleRepository.findOne(id);
  }

  save(role: Role) {
    return this.roleRepository.save(role);
  }
}