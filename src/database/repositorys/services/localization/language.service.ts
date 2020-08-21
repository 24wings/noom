import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";

@Injectable()
export class LanguageService {

  constructor(
    @InjectRepository(LanguageInfo)
    private languageResponsitory: Repository<LanguageInfo>) { }

  async GetLanguages() {
    return await this.languageResponsitory.find();

  }
  async getLangugesAndDefaultLanguage() {
    let result = await this.languageResponsitory.findAndCount();
    let defaultLanguage = result[0].find(l => l.isDefault)
    return {
      defaultLanguage: defaultLanguage ? defaultLanguage.name
        : null, items: result[0]
    }
  }
}