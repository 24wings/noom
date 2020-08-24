import { Controller, Get, Query, Post, Body, Put, Req, Request, Ip } from "@nestjs/common";
import { TenantService } from "src/database/repositorys/services/rbac/tenant.service";
import { ApiResponse, ApiBody } from "@nestjs/swagger";
import { GetTenantOutput } from "../dtos/get-tenants.output";
import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { Tenant } from "src/database/repositorys/entitys/rbac/tenant.entity";

@Controller("api/services/app/Tenant")
export class TenantController {
  constructor(private tenantService: TenantService) { }
  @Get("GetTenants")
  @ApiResponse({ type: GetTenantOutput })
  async GetTenants(): Promise<GetTenantOutput> {
    let data = await this.tenantService.findAndCount();
    return Object.assign(new CommonOutput(), { result: { items: data[0], totalCount: data[1] } });
  }

  @Get('GetTenantForEdit')
  async GetTenantForEdit(@Query('id') id: number) {
    const tenant = await this.tenantService.findById(id);
    return Object.assign(new CommonOutput(), tenant);
  }

  // @ApiBody({ type: Tenant })
  @Put("UpdateTenant")
  async UpdateTenant(@Body() tenant: Tenant) {
    console.log(tenant)
    await this.tenantService.update(tenant);
    return new CommonOutput();
  }
}