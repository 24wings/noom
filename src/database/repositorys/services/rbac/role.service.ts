import { Injectable, ForbiddenException } from "@nestjs/common";
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

  async removeById(id: number) {
    const role = await this.roleRepository.findOne(id);
    if (role.isStatic) {
      throw new ForbiddenException('admin or static role not allow remove')
    }
    return this.roleRepository.remove(role);
  }
  deleteById(id: number) {
    return this.roleRepository.delete(id);
  }
}