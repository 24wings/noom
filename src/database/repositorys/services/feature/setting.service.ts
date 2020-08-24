import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Setting } from "../../entitys/feature/setting.entity";
import { PasswordComplexitySetting } from "../../types/email-setting.interface";
import { SettingEnum } from "../../entitys/feature/settings.enum";

@Injectable()
export class SettingService {
  constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) { }

  findAll() {
    return this.settingRepository.find();
  }
  async getPasswordComplexitySetting(): Promise<PasswordComplexitySetting> {
    return {
      requireDigit: await this.findOneValueBoolean(SettingEnum.requireDigit),
      requiredLength: await this.findToNumberValue(SettingEnum.requiredLength),
      requireLowercase: await this.findOneValueBoolean(SettingEnum.requireDigit),
      requireNonAlphanumeric: await this.findOneValueBoolean(SettingEnum.requireNonAlphanumeric),
      requireUppercase: await this.findOneValueBoolean(SettingEnum.requireUppercase),
    }
  }

  async findToNumberValue(name: string) {
    const setting = await this.findOne(name);
    if (setting) {
      return parseInt(setting.value);
    } else {
      return null;
    }
  }
  findOne(name: string) {
    return this.settingRepository.findOne(name);
  }
  async findOneValue(name: string) {
    const setting = await this.findOne(name);
    if (setting) {
      return setting.value;
    } else {
      return null;
    }
  }
  async findOneValueBoolean(name: string) {
    const setting = await this.findOne(name);
    if (setting) {
      return setting.value == 'true';
    } else {
      return null;
    }
  }
}