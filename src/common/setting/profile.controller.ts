import { Controller, Get } from "@nestjs/common";
import { SettingService } from "src/database/repositorys/services/feature/setting.service";
import { CommonOutput } from "src/shared/dtos/common-output.dto";

@Controller(`api/services/app/Profile`)
export class ProfileController {
  constructor(private settingService: SettingService) { }
  @Get(`GetPasswordComplexitySetting`)
  async GetPasswordComplexitySetting() {
    const setting = await this.settingService.getPasswordComplexitySetting()

    return CommonOutput.success({ setting })
  }


}