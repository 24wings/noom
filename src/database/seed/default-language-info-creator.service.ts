import {
  OnModuleInit,
  Injectable,
  OnApplicationBootstrap,
  Logger,
} from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JsonLocalizationFile } from 'src/shared/localization/dictionaries/json/json-localization-file';
import { LocalizationString } from 'src/database/repositorys/entitys/localization/localization-string.entity';
import { LanguageInfo } from '../repositorys/entitys/localization/languageInfo.entity';
@Injectable()
export class DefaultLanguageInfoCreator implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(LanguageInfo)
    private languageRepository: Repository<LanguageInfo>,
    @InjectRepository(LocalizationString)
    private localizationStringResponsitory: Repository<LocalizationString>
  ) { }
  async onApplicationBootstrap() {
    let content: JsonLocalizationFile = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../assets/localization/zh-CN.json'), { encoding: 'utf-8' }));
    console.log(content.culture);
    let zhLanguage = new LanguageInfo('zh-CN', '简体中文', 'famfamfam-flags cn', true);
    await this.languageRepository.save(zhLanguage);
    zhLanguage.localizationStrings = Object.keys(content.texts).map(k => new LocalizationString('zh-CN', k, content.texts[k], zhLanguage));
    await this.localizationStringResponsitory.save(zhLanguage.localizationStrings);


  }
}
