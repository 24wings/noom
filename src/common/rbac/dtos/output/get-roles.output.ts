import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { Role } from "src/database/repositorys/entitys/rbac/role.entity";
import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

export class GetRolesResult {
  @ApiProperty({ type: [Role] })
  items: Role[];
}

@ApiExtraModels()
export class GetRolesOutput extends CommonOutput {
  @ApiProperty({ description: '结果' })
  result: GetRolesResult;
}