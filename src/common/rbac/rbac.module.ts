import { Module, Controller } from "@nestjs/common";
import { RoleController } from "./controllers/role.controller";
import { PermissionController } from "./controllers/permission.controller";
import { OrgController } from "./controllers/org.controller";
import { UserController } from "./controllers/user.controller";

@Module({
  imports: [],
  controllers: [RoleController, PermissionController, OrgController, UserController]
})
export class RbacModule {

}