import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";


export interface ILanguageProvider {
  getLanguages(): LanguageInfo[];

  getActiveLanguages(): LanguageInfo[];
}