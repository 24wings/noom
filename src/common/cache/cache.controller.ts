import { Controller, Get } from "@nestjs/common";

@Controller('api/services/app/Caching')
export class CacheController {
  @Get('GetAllCaches')
  async getAll() {
    return { "result": { "items": [{ "name": "AbpApplicationSettingsCache" }, { "name": "AbpZeroUserPermissions" }, { "name": "AbpTenantSettingsCache" }, { "name": "AppUserFriendCache" }, { "name": "AbpZeroTenantByNameCache" }, { "name": "AbpUserSettingsCache" }, { "name": "AbpZeroLanguages" }, { "name": "AspNet.Identity.SecurityStamp" }, { "name": "AbpZeroMultiTenantLocalizationDictionaryCache" }, { "name": "AbpZeroTenantCache" }, { "name": "AbpZeroRolePermissions" }, { "name": "token_validity_key" }, { "name": "AbpZeroTenantFeatures" }] }, "targetUrl": null, "success": true, "error": null, "unAuthorizedRequest": false, "__abp": true }
  }
}