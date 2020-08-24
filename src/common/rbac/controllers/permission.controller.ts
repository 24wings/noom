import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { PermissionService } from "src/database/repositorys/services/rbac/permission.service";
import { GetAllPermissionsOutput } from "../dtos/output/get-all-permissions.output";
import { CommonOutput } from "src/shared/dtos/common-output.dto";

@ApiTags('admin')
@Controller('api/services/app/Permission')
export class PermissionController {
  constructor(private permissionService: PermissionService) { }
  @ApiResponse({ type: GetAllPermissionsOutput })
  @Get('GetAllPermissions')
  async GetAllPermissions(): Promise<GetAllPermissionsOutput> {
    let result = await this.permissionService.findAll();
    console.log(result);
    return Object.assign(new CommonOutput(),
      {
        result: {
          items: result.map(item => { return { name: item.id, parentName: item.parentId, displayName: item.displayName, description: item.description } })
        }
      });
  }
}