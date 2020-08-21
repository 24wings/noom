import { ILocalizationConfiguration } from "./i-localization-configuration";
import { ILocalizationSourceList } from "./sources/i-localization-source-list";
import { ILocalizationSource } from "./sources/i-localization-source";
import { Injectable, Scope } from "@nestjs/common";
import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";

@Injectable({scope:Scope.DEFAULT})
export class LocalizationConfiguration implements ILocalizationConfiguration {
  /// <inheritdoc/>
  languages: LanguageInfo[];

  /// <inheritdoc/>
  sources: ILocalizationSource[];

  /// <inheritdoc/>
  public isEnabled: boolean;

  /// <inheritdoc/>
  public returnGivenTextIfNotFound: boolean;

  /// <inheritdoc/>
  public wrapGivenTextIfNotFound: boolean;

  /// <inheritdoc/>
  public humanizeTextIfNotFound: boolean

  public logWarnMessageIfNotFound: boolean

  public constructor() {
    this.languages = []
    this.sources = [];

    this.isEnabled = true;
    this.returnGivenTextIfNotFound = true;
    this.wrapGivenTextIfNotFound = true;
    this.humanizeTextIfNotFound = true;
    this.logWarnMessageIfNotFound = true;
  }
}