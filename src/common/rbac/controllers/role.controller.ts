import { Controller, Get, Query, Post, Body, HttpCode } from "@nestjs/common";
import { RoleService } from "src/database/repositorys/services/rbac/role.service";
import { ApiResponse, ApiTags, ApiOperation, ApiBody } from "@nestjs/swagger";
import { GetRolesOutput } from "../dtos/output/get-roles.output";
import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { PermissionService } from "src/database/repositorys/services/permission.service";
import { GetRoleForEditOutput, GetRoleForEditResult } from "../dtos/output/get-role-for-edit.output";
import { CreateOrUpdateRoleInput } from "../dtos/input/create-or-update-role.input";
@ApiTags("admin")
@Controller('api/services/app/Role')
export class RoleController {
  constructor(private roleService: RoleService, private permissionService: PermissionService) { }
  @ApiResponse({ type: GetRolesOutput })
  @ApiOperation({ description: "获取所有角色" })
  @Get("GetRoles")
  async GetRoles(): Promise<GetRolesOutput> {
    let roles = await this.roleService.findAll()
    return Object.assign(new CommonOutput(), { result: { items: roles } });
  }

  @ApiResponse({ type: GetRoleForEditOutput })
  @Get('GetRoleForEdit')
  async GetRoleForEdit(@Query('id') id: number): Promise<GetRoleForEditOutput> {
    let allPermissions = await this.permissionService.findAll();
    let role = await this.roleService.findById(id)

    return Object.assign(new CommonOutput(), {
      result: {
        grantedPermissionNames: role.permissionList.map(p => p.id),
        permissions: allPermissions.map(p => {
          return {
            name: p.id,
            parentName: p.parentId,
            displayName: p.displayName,
            description: p.description
          }
        }),
        role
      } as GetRoleForEditResult,

    });

  }

  @ApiResponse({ type: CommonOutput })
  @ApiBody({ type: CreateOrUpdateRoleInput })
  @Post('CreateOrUpdateRole')
  @HttpCode(200)
  async CreateOrUpdateRole(@Body() input: CreateOrUpdateRoleInput): Promise<CommonOutput> {
    const role = await this.roleService.findById(input.role.id);
    role.permissionList = await this.permissionService.findByIds(input.grantedPermissionNames);
    await this.roleService.save(role);
    return Object.assign(new CommonOutput(), { result: true });

  }
}