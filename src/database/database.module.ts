import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultLanguageInfoCreator } from './seed/localization/default-language-info-creator.service';
import { DefaultFeatureCreator } from './seed/feature/default-feature-creator.service';
import { FeatureService } from './repositorys/services/feature/feature.service';
import { LanguageInfo } from './repositorys/entitys/localization/languageInfo.entity';
import { LocalizationString } from './repositorys/entitys/localization/localization-string.entity';
import { Feature } from './repositorys/entitys/feature/feature.entity';
import { LanguageService } from 'src/database/repositorys/services/localization/language.service';
import { Permission } from './repositorys/entitys/authorization/permission.entity';
import { DefaultPermissionCreator } from './seed/rbac/default-permission-creator.service';
import { PermissionService } from './repositorys/services/rbac/permission.service';
import { SettingService } from './repositorys/services/feature/setting.service';
import { DefaultSettingCreator } from './seed/feature/default-setting-creator.service';
import { DefaultUserCreatorService } from './seed/rbac/default-user-creator.service';
import { User } from './repositorys/entitys/rbac/user.entity';
import { UsersService } from './repositorys/services/rbac/user.service';
import { Tenant } from './repositorys/entitys/rbac/tenant.entity';
import { TenantService } from './repositorys/services/rbac/tenant.service';
import { DefaultTenantCreatorService } from './seed/rbac/default-tenant-creator.service';
import { Edition } from './repositorys/entitys/edition/edition.entity';
import { EditionService } from './repositorys/services/edition.service';
import { RoleService } from './repositorys/services/rbac/role.service';
import { Role } from './repositorys/entitys/rbac/role.entity';
import { DefaultRoleCreatorService } from './seed/rbac/default-role-creator.service';
import { AuditLog } from './repositorys/entitys/audit-log/audit-log.entity';
import { AuditLogService } from './repositorys/services/audit-log/audit-log.service';
import { Organization } from './repositorys/entitys/rbac/org.entity';
import { DefaultOrgCreatorService } from './seed/rbac/default-org-creator.service';
import { OrgService } from './repositorys/services/rbac/org.service';
import { Setting } from './repositorys/entitys/feature/setting.entity';
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
      User,
      Tenant,
      Edition,
      Role,
      AuditLog,
      Organization,
      Setting
    ])],
  providers: [...CREATORS, ...PROVIDERS],
  exports: [...PROVIDERS]
})
export class DatabaseModule { }
