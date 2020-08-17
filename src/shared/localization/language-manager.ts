import { ILanguageManager } from "./i-language-manager";
import { LanguageInfo } from "src/database/language/languageInfo.entity";
import { DefaultLanguageProvider } from "./language-provider";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CultureInfo } from "./dictionaries/culture-info";

@Injectable()
export class LanguageManager implements ILanguageManager {

  get currentLanguage() { return this.getCurrentLanguage(); }




  public constructor(private readonly languageProvider: DefaultLanguageProvider) {

  }

  getLanguages(): LanguageInfo[] {
    return this.languageProvider.getLanguages();
  }

  getActiveLanguages(): LanguageInfo[] {
    return this.languageProvider.getActiveLanguages();
  }

  private getCurrentLanguage(): LanguageInfo {
    var languages = this.languageProvider.getLanguages();
    if (languages.length <= 0) {
      throw new BadRequestException("No language defined in this application.");
    }

    var currentCultureName = CultureInfo.CurrentUICulture.name;

    //Try to find exact match
    var currentLanguage = languages.find(l => l.name == currentCultureName);
    if (currentLanguage != null) {
      return currentLanguage;
    }

    //Try to find best match
    currentLanguage = languages.find(l => currentCultureName.indexOf(l.name) == 0);
    if (currentLanguage != null) {
      return currentLanguage;
    }

    //Try to find default language
    currentLanguage = languages.find(l => l.isDefault);
    if (currentLanguage != null) {
      return currentLanguage;
    }

    //Get first one
    return languages[0];
  }
}