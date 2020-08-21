import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { Role } from "src/database/repositorys/entitys/rbac/role.entity";

export class GetRolePermissionItem {
  description: string;
  displayName: string;
  isGrantedByDefault?: boolean;
  name: string;
  parentName: string;
}
export class GetRoleForEditResult {
  grantedPermissionNames: string[]
  permissions: GetRolePermissionItem[]
  role: Role;
}
export class GetRoleForEditOutput extends CommonOutput {
  result: GetRoleForEditResult;

}