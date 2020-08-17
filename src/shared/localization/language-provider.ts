import { ILanguageProvider } from "./i-language-provider";
import { LocalizationConfiguration } from "./localization-configuration";
import { LanguageInfo } from "src/database/language/languageInfo.entity";
import { Injectable, Scope, OnModuleInit } from "@nestjs/common";

@Injectable({ scope:Scope.DEFAULT})
export class DefaultLanguageProvider implements ILanguageProvider,OnModuleInit {


  public constructor(private readonly configuration: LocalizationConfiguration) {
  }
  onModuleInit() {
    console.log(`====================================================================`)
  }

  getLanguages(): LanguageInfo[] {
    return this.configuration.languages;
  }

  getActiveLanguages(): LanguageInfo[] {
    return this.configuration.languages.filter(l => !l.isDisabled);
  }
}