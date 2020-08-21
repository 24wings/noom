import { Controller, Get } from "@nestjs/common";
import { UserConfigurationAllOutput, LocalizationOutput } from "../dtos/user-configuration-all.output";
import { LanguageService } from "src/database/repositorys/services/localization/language.service";
import { CultureInfo } from "src/shared/localization/dictionaries/culture-info";
import { LocalizationString } from "src/database/repositorys/entitys/localization/localization-string.entity";
import { FeatureService } from "src/database/repositorys/services/feature.service";
import { PermissionService } from "src/database/repositorys/services/permission.service";
import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { SettingService } from "src/database/repositorys/services/setting.service";

@Controller("AbpUserConfiguration")
export class UserConfigurationController {
  constructor(
    private languageService: LanguageService,
    private feature: FeatureService,
    private permissionService: PermissionService,
    private settingService: SettingService
  ) { }
  @Get("GetAll")
  async GetAll(): Promise<UserConfigurationAllOutput> {
    const languages = await this.languageService.GetLanguages();
    const permissions = await this.permissionService.findAll();
    const allFeatures = await this.feature.findAll().then(rtn => {
      let result = {};
      rtn.forEach(item => result[item.name] = { value: item.defaultValue });
      return result;
    });
    let allSettings = await this.settingService.findAll().then(rtn => { let result = {}; rtn.forEach(item => result[item.name] = item.value); return result })
    let allPermissions = {}
    permissions.map(p => [p.id, "true"]).forEach((kv) => allPermissions[kv[0]] = kv[1]);



    let ctrl = this;
    return Object.assign(new CommonOutput(), {

      result: {
        localization: {
          languages,
          currentCulture: new CultureInfo('zh-CN'),
          values: ctrl.toValues(languages[0].localizationStrings),
          currentLanguage: languages[0]
        },
        clock: { provider: 'unspecifiedClockProvider' } as any,
        auth: {
          allPermissions,
          grantedPermissions: {}
        },
        features: {
          allFeatures
        },
        setting: { values: allSettings }
      }

    }
    );

  }
  toValues(s: LocalizationString[]) {
    let result: any = {};
    s.forEach(item => result[item.sourceName] = item.target);
    return result;
  }

}