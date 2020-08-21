import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultLanguageInfoCreator } from './seed/default-language-info-creator.service';
import { DefaultFeatureCreator } from './seed/default-feature-creator.service';
import { FeatureService } from './repositorys/services/feature.service';
import { LanguageInfo } from './repositorys/entitys/localization/languageInfo.entity';
import { LocalizationString } from './repositorys/entitys/localization/localization-string.entity';
import { Feature } from './repositorys/entitys/feature/feature.entity';
import { LanguageService } from 'src/database/repositorys/services/localization/language.service';
import { Permission } from './repositorys/entitys/authorization/permission.entity';
import { DefaultPermissionCreator } from './seed/default-permission-creator.service';
import { PermissionService } from './repositorys/services/permission.service';
import { Setting } from './repositorys/entitys/setting/setting.entity';
import { SettingService } from './repositorys/services/setting.service';
import { DefaultSettingCreator } from './seed/default-setting-creator.service';
import { DefaultUserCreatorService } from './seed/default-user-creator.service';
import { User } from './repositorys/entitys/rbac/user.entity';
import { UsersService } from './repositorys/services/user.service';
import { Tenant } from './repositorys/entitys/rbac/tenant.entity';
import { TenantService } from './repositorys/services/tenant.service';
import { DefaultTenantCreatorService } from './seed/default-tenant-creator.service';
import { Edition } from './repositorys/entitys/edition/edition.entity';
import { EditionService } from './repositorys/services/edition.service';
import { RoleService } from './repositorys/services/rbac/role.service';
import { Role } from './repositorys/entitys/rbac/role.entity';
import { DefaultRoleCreatorService } from './seed/default-role-creator.service';
import { AuditLog } from './repositorys/entitys/audit-log/audit-log.entity';
import { AuditLogService } from './repositorys/services/audit-log/audit-log.service';
import { Organization } from './repositorys/entitys/rbac/org.entity';
import { DefaultOrgCreatorService } from './seed/default-org-creator.service';
import { OrgService } from './repositorys/services/rbac/org.service';
const CREATORS = [
  DefaultLanguageInfoCreator,
  DefaultFeatureCreator,
  DefaultPermissionCreator,
  DefaultSettingCreator,
  DefaultUserCreatorService,
  DefaultTenantCreatorService,
  DefaultRoleCreatorService,
  DefaultOrgCreatorService
]
const PROVIDERS = [
  FeatureService,
  LanguageService,
  FeatureService,
  PermissionService,
  SettingService,
  UsersService,
  TenantService,
  EditionService,
  RoleService,
  LanguageService,
  AuditLogService,
  OrgService
]

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(
    [LanguageInfo,
      LocalizationString,
      Feature,
      Permission,
      Setting,
      User,
      Tenant,
      Edition,
      Role,
      AuditLog,
      Organization
    ])],
  providers: [...CREATORS, ...PROVIDERS],
  exports: [...PROVIDERS]
})
export class DatabaseModule { }
