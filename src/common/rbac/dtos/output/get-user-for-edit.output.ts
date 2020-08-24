import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { User } from "src/database/repositorys/entitys/rbac/user.entity";

export class GetUserForEditOutput extends CommonOutput {
  result: {
    "profilePictureId": number;
    "user": User;
    "roles": { "roleId": number, "roleName": string, "roleDisplayName": string, "isAssigned": boolean }[];
  }
}