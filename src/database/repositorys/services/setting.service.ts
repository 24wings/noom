import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Setting } from "../entitys/setting/setting.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SettingService {
  constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) { }

  findAll() {
    return this.settingRepository.find();
  }
}