import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { CultureInfo } from "src/shared/localization/dictionaries/culture-info";
import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";


@ApiExtraModels()
export class LocalizationOutput {
  currentCulture: CultureInfo
  currentLanguage: LanguageInfo;
  languages: LanguageInfo[];
  values: { [k: string]: string }
  constructor(opt: {
    currentCulture: CultureInfo,
    currentLanguage: LanguageInfo,
    languages: LanguageInfo[],
    values: { [k: string]: string }
  }) {
    this.currentCulture = opt.currentCulture;
    this.currentLanguage = opt.currentLanguage;
    this.languages = opt.languages;
    this.values = opt.values;
  }
}
export class ClockOutput {
  provider: 'unspecifiedClockProvider'
}

export class FeaturesOutput {
  allFeatures: { [k: string]: { value: string } }
}

export class PermissionKeyValueOutput {
  [key: string]: string;
}

export class AuthOutput {
  @ApiProperty({ description: "所有权限" })
  allPermissions: PermissionKeyValueOutput;
  @ApiProperty({ description: "已有权限" })
  grantedPermissions: PermissionKeyValueOutput;

}

@ApiExtraModels()
export class UserConfigurationResultOutput {
  @ApiProperty({ description: '国际化' })
  localization: LocalizationOutput;
  clock: ClockOutput
  features: FeaturesOutput
  auth: AuthOutput;
}

@ApiExtraModels()
export class UserConfigurationAllOutput extends CommonOutput {
  @ApiProperty({ description: '结果' })
  result: UserConfigurationResultOutput;
  constructor(result: { loclization: LocalizationOutput, clock: ClockOutput, auth: AuthOutput }) {
    super();
    this.result = new UserConfigurationResultOutput();
    this.result.localization = result.loclization;
    this.result.clock = result.clock;
    this.result.auth = result.auth;

  }
}

