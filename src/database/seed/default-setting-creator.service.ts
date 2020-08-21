import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Repository } from "typeorm";
import { Setting } from "../repositorys/entitys/setting/setting.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DefaultSettingCreator implements OnApplicationBootstrap {
  constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) { }
  async onApplicationBootstrap() {
    await this.settingRepository.save(new Setting("Abp.Localization.DefaultLanguageName", "zh-Hans"
    ))
  }

}