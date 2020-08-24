import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Setting } from "../../repositorys/entitys/feature/setting.entity";
import { SettingEnum } from "src/database/repositorys/entitys/feature/settings.enum";

@Injectable()
export class DefaultSettingCreator implements OnApplicationBootstrap {
  constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) { }
  async onApplicationBootstrap() {
    await this.settingRepository.save(new Setting("Abp.Localization.DefaultLanguageName", "zh-Hans"));
    await this.settingRepository.save(new Setting(SettingEnum.requireDigit, false));
    await this.settingRepository.save(new Setting(SettingEnum.requireLowercase, false));
    await this.settingRepository.save(new Setting(SettingEnum.requireNonAlphanumeric, false));
    await this.settingRepository.save(new Setting(SettingEnum.requireUppercase, false))
    await this.settingRepository.save(new Setting(SettingEnum.requiredLength, 3));
  }

}