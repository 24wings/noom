import { Controller, Query, Get, Post, Body, HttpCode, Delete } from '@nestjs/common';
import { getUserForEditNoUser } from '../data/get-user-for-edit-no-user.data';
import { getUserForEditAdmin } from '../data/get-user-for-edit-admin.data';
import { CommonOutput } from 'src/shared/dtos/common-output.dto';
import { GetUserForEditOutput } from '../dtos/output/get-user-for-edit.output';
import { UsersService } from 'src/database/repositorys/services/rbac/user.service';
import { RoleService } from 'src/database/repositorys/services/rbac/role.service';
import { CreateOrUpdateUserInput } from '../dtos/input/create-or-update-user.input';
@Controller('api/services/app/User')
export class UserController {
  constructor(private userService: UsersService, private roleService: RoleService) { }

  @Get(`GetUserForEdit`)
  async GetUserForEdit(@Query('Id') id: number): Promise<GetUserForEditOutput> {
    if (id) {
      const user = await this.userService.findOneWithRoles(id);
      const roles = await this.roleService.findAll();
      const assignRoles = user.roleList.map(r => { return { "roleId": r.id, "roleName": r.name, "roleDisplayName": r.displayName, "isAssigned": true } });
      const clientRoles = roles.filter(r => assignRoles.map(ar => ar.roleId).indexOf(r.id) == -1).map(r => { return { "roleId": r.id, "roleName": r.name, "roleDisplayName": r.displayName, "isAssigned": false } }).concat(assignRoles);

      return CommonOutput.success({ profilePictureId: null, user, roles: clientRoles, allOrganizationUnits: [], memberedOrganizationUnits: [] })
      // return getUserForEditAdmin;
    } else {
      return getUserForEditNoUser as any;
    }
  }
  @Post(`CreateOrUpdateUser`)
  @HttpCode(200)
  async CreateOrUpdateUser(@Body() input: CreateOrUpdateUserInput) {
    if (input.user) {
      // const user = await this.userService.findOneWithRoles(input.user.id);
      input.user.roleList = await this.roleService.findByIds(input.assignedRoleNames);
      input.user.nickname = input.user['surname'];
      if (!input.user.password) { input.user.password = input.user.nickname + '.123' }
      await this.userService.save(input.user);
      return CommonOutput.success(null);
    } else {
      const roleList = await this.roleService.findByIds(input.assignedRoleNames);
      input.user.roleList = roleList;
      await this.userService.add(input.user);
      return CommonOutput.success(null);
    }


  }

  @Delete('DeleteUser')
  async DeleteUser(@Query('Id') id: number) {
    await this.userService.remove(id);
    return new CommonOutput();

  }

} 