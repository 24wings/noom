import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository, TreeRepository } from "typeorm";
import { Permission } from "../repositorys/entitys/authorization/permission.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AppPermissions } from "src/auth/app-permissions";

@Injectable()
export class DefaultPermissionCreator implements OnApplicationBootstrap {
  constructor(@InjectRepository(Permission) private permissionRepository: TreeRepository<Permission>) { }

  async onApplicationBootstrap() {
    let tree = this.getDefaultPermissionTree();
    await this.permissionRepository.save(tree);
  }


  getDefaultPermissionTree(): Permission[] {

    let rootPermission = new Permission(AppPermissions.Pages);
    let admin = new Permission(AppPermissions.Pages_Administration, rootPermission);
    let adminAuditLogs = new Permission(AppPermissions.Pages_Administration_AuditLogs, admin);

    return [rootPermission, admin, adminAuditLogs];
  }

}