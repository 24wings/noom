import { Injectable } from "@nestjs/common";
import { Repository, In } from "typeorm";
import { Permission } from "../../entitys/authorization/permission.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PermissionService {
  constructor(@InjectRepository(Permission) private permissionRepository: Repository<Permission>) { }

  findAll() {
    return this.permissionRepository.find();
  }
  findByIds(ids: string[]) {
    return this.permissionRepository.find({
      id: In(ids)
    })
  }

}