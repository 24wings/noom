import { LanguageInfo } from "src/database/language/languageInfo.entity";

export interface ILanguageManager {
  currentLanguage: LanguageInfo;

  getLanguages(): LanguageInfo[];

  getActiveLanguages(): LanguageInfo[];
}