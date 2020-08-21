import { ILanguageProvider } from "./i-language-provider";
import { LocalizationConfiguration } from "./localization-configuration";
import { Injectable, Scope, OnModuleInit } from "@nestjs/common";
import { LocalizationDictionaryProviderBase } from "./dictionaries/localization-dictionary-provider-base";
import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";
/**
 * TODO:
 */
@Injectable({ scope:Scope.DEFAULT})
export class DefaultLanguageProvider implements ILanguageProvider {


  public constructor(private configuration: LocalizationConfiguration,l:LocalizationDictionaryProviderBase) {
  }

  getLanguages(): LanguageInfo[] {
    return this.configuration.languages;
  }

  getActiveLanguages(): LanguageInfo[] {
    return this.configuration.languages.filter(l => !l.isDisabled);
  }
}