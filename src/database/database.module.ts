import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageInfo } from './language/languageInfo.entity';
import { DefaultLanguageInfoCreator } from './seed/default-language-info-creator.service';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageInfo]),],
  providers: [DefaultLanguageInfoCreator,],
})
export class DatabaseModule { }
