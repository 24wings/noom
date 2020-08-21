import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";

export interface ILanguageManager {
  currentLanguage: LanguageInfo;

  getLanguages(): LanguageInfo[];

  getActiveLanguages(): LanguageInfo[];
}