import { Module, Controller } from "@nestjs/common";
import { RoleController } from "./controllers/role.controller";
import { PermissionController } from "./controllers/permission.controller";
import { OrgController } from "./controllers/org.controller";

@Module({
  imports: [],
  controllers: [RoleController, PermissionController, OrgController]
})
export class RbacModule {

}