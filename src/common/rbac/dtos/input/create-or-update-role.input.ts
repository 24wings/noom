import { Injectable } from "@nestjs/common";
import { ApiExtraModels } from "@nestjs/swagger";
import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { Role } from "src/database/repositorys/entitys/rbac/role.entity";


@ApiExtraModels()
export class CreateOrUpdateRoleInput {
  grantedPermissionNames: string[];
  role: Role;
}