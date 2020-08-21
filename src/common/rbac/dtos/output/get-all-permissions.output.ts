import { CommonOutput } from "src/shared/dtos/common-output.dto";

export class GetAllPermissionItem {
  description: string
  displayName: string;
  isGrantedByDefault?: boolean;
  level?: number;
  name: string
  parentName: string;
}

export class GetAllPermissionResult {
  items: GetAllPermissionItem[]
}

export class GetAllPermissionsOutput extends CommonOutput {
  result: GetAllPermissionResult;
}