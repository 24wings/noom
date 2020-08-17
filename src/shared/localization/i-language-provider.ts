import { LanguageInfo } from "src/database/language/languageInfo.entity";


export interface ILanguageProvider {
  getLanguages(): LanguageInfo[];

  getActiveLanguages(): LanguageInfo[];
}