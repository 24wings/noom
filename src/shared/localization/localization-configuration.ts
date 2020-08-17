import { ILocalizationConfiguration } from "./i-localization-configuration";
import { ILocalizationSourceList } from "./sources/i-localization-source-list";
import { LanguageInfo } from "src/database/language/languageInfo.entity";
import { ILocalizationSource } from "./sources/i-localization-source";
import { Injectable } from "@nestjs/common";

@Injectable()
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