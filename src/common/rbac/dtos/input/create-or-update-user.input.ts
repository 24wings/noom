import { User } from "src/database/repositorys/entitys/rbac/user.entity"

export class CreateOrUpdateUserInput {
  "user": User;
  "assignedRoleNames": string[];
  "sendActivationEmail": boolean;
  "setRandomPassword": boolean;
  "organizationUnits": number[]
}
