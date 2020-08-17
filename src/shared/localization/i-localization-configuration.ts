/// <summary>
/// Used for localization configurations.

import { LanguageInfo } from "src/database/language/languageInfo.entity";
import { ILocalizationSourceList } from "./sources/i-localization-source-list";
import { ILocalizationSource } from "./sources/i-localization-source";

/// </summary>
export interface ILocalizationConfiguration {
  /// <summary>
  /// Used to set languages available for this application.
  /// </summary>
  languages: LanguageInfo[];

  /// <summary>
  /// List of localization sources.
  /// </summary>
  sources: ILocalizationSource[];

  /// <summary>
  /// Used to enable/disable localization system.
  /// Default: true.
  /// </summary>
  isEnabled: boolean

  /// <summary>
  /// If this is set to true, the given text (name) is returned
  /// if not found in the localization source. That prevent exceptions if
  /// given name is not defined in the localization sources.
  /// Also writes a warning log.
  /// Default: true.
  /// </summary>
  returnGivenTextIfNotFound: boolean

  /// <summary>
  /// It returns the given text by wrapping with [ and ] chars
  /// if not found in the localization source.
  /// This is considered only if <see cref="ReturnGivenTextIfNotFound"/> is true.
  /// Default: true.
  /// </summary>
  wrapGivenTextIfNotFound: boolean;

  /// <summary>
  /// It returns the given text by converting string from 'PascalCase' to a 'Sentense case'
  /// if not found in the localization source.
  /// This is considered only if <see cref="ReturnGivenTextIfNotFound"/> is true.
  /// Default: true.
  /// </summary>
  humanizeTextIfNotFound: boolean

  /// <summary>
  /// Write (or not write) a warning log if given text can not found in the localization source.
  /// Default: true.
  /// </summary>
  logWarnMessageIfNotFound: boolean
}