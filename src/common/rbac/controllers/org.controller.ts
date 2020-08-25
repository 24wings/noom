import { Controller, Get, Query, Body, Post, HttpCode } from "@nestjs/common";
import { OrgService } from "src/database/repositorys/services/rbac/org.service";
import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { GetOrganizationUnitUsers } from "../dtos/input/get-organization-unit-users.input";
import { GetOrganizationUnitRolesInput } from "../dtos/input/get-organization-unit-roles.input";
import { Organization } from "src/database/repositorys/entitys/rbac/org.entity";
import { SessionService } from "src/common/auth/services/session.service";

@Controller('api/services/app/OrganizationUnit')
export class OrgController {
  constructor(private orgService: OrgService, private sessionService: SessionService) { }

  @Get(`GetOrganizationUnits`)
  async GetOrganizationUnits() {
    const items = await this.orgService.findAll();
    return Object.assign(new CommonOutput(), { result: { items } });
  }

  @Get(`GetOrganizationUnitUsers`)
  async GetOrganizationUnitUsers(@Query() id: GetOrganizationUnitUsers) {
    const result = await this.orgService.findOneWithUsers(id.Id);
    return Object.assign(new CommonOutput(), { result: { items: result.users } });

  }
  @Get(`GetOrganizationUnitRoles`)
  async GetOrganizationUnitRoles(@Query() input: GetOrganizationUnitRolesInput) {
    const result = await this.orgService.findOneWithRoles(input.Id);
    return Object.assign(new CommonOutput(), { result: { items: result.roles } });
  }

  @HttpCode(200)
  @Post(`CreateOrganizationUnit`)
  async CreateOrganizationUnit(@Body() input: Organization) {
    const user = await this.sessionService.getUserOrNull();
    input.creatorUserId = user.id;
    const result = await this.orgService.save(input)
    return CommonOutput.success(result);

  }

}