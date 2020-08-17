import {
  OnModuleInit,
  Injectable,
  OnApplicationBootstrap,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageInfo } from '../language/languageInfo.entity';
import { Repository } from 'typeorm';
@Injectable()
export class DefaultLanguageInfoCreator implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(LanguageInfo)
    private languageRepository: Repository<LanguageInfo>
  ) { }
  async onApplicationBootstrap() {
    await this.languageRepository.save(
      new LanguageInfo(1, 'zh-CN', '简体中文', 'famfamfam-flags cn', true),
    );
    let r = await this.languageRepository.findOne();
    // this.logger.log(r);
  }
}
