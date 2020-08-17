/// <summary>
/// A Localization Source is used to obtain localized strings.

import { ILocalizationConfiguration } from "./i-localization-configuration";
import { CultureInfo } from "../dictionaries/culture-info";
import { LocalizedString } from "../dictionaries/localized-string";

/// </summary>
export interface ILocalizationSource {
  /// <summary>
  /// Unique Name of the source.
  /// </summary>
  name: string;
  sourceName: string;

  /// <summary>
  /// This method is called by ABP before first usage.
  /// </summary>
  Initialize(configuration: ILocalizationConfiguration): void;

  /// <summary>
  /// Gets localized string for given name in current language.
  /// Fallbacks to default language if not found in current culture.
  /// </summary>
  /// <param name="name">Key name</param>
  /// <returns>Localized string</returns>
  GetString(name: string): string;

  /// <summary>
  /// Gets localized string for given name and specified culture.
  /// Fallbacks to default language if not found in given culture.
  /// </summary>
  /// <param name="name">Key name</param>
  /// <param name="culture">culture information</param>
  /// <returns>Localized string</returns>
  GetString(name: string, culture: CultureInfo): string;

  /// <summary>
  /// Gets localized string for given name in current language.
  /// Returns null if not found.
  /// </summary>
  /// <param name="name">Key name</param>
  /// <param name="tryDefaults">
  /// True: Fallbacks to default language if not found in current culture.
  /// </param>
  /// <returns>Localized string</returns>
  GetStringOrNull(name: string, tryDefaults: boolean): string;

  /// <summary>
  /// Gets localized string for given name and specified culture.
  /// Returns null if not found.
  /// </summary>
  /// <param name="name">Key name</param>
  /// <param name="culture">culture information</param>
  /// <param name="tryDefaults">
  /// True: Fallbacks to default language if not found in current culture.
  /// </param>
  /// <returns>Localized string</returns>
  GetStringOrNull(name: string, culture: CultureInfo, tryDefaults?: boolean): string;

  /// <summary>
  /// Gets list of localized strings for given names in current language.
  /// Fallbacks to default language if not found in current culture.
  /// </summary>
  /// <param name="names">Key names</param>
  /// <returns>Localized string</returns>
  getStrings(names: string[], culture?: CultureInfo): string[];

  /// <summary>
  /// Gets list of localized strings for given names and specified culture.
  /// Fallbacks to default language if not found in given culture.
  /// </summary>
  /// <param name="names">Key names</param>
  /// <param name="culture">culture information</param>
  /// <returns>Localized string</returns>
  getStrings(names: string[]);

  /// <summary>
  /// Gets list of localized strings for given names  in current language.
  /// Returns null if not found.
  /// </summary>
  /// <param name="names">Key name</param>
  /// <param name="tryDefaults">
  /// True: Fallbacks to default language if not found in current culture.
  /// </param>
  /// <returns>Localized string</returns>
  getStringsOrNull(names: string[], tryDefaults?: boolean);

  /// <summary>
  /// Gets list of localized strings for given names and specified culture.
  /// Returns null if not found.
  /// </summary>
  /// <param name="names">Key name</param>
  /// <param name="culture">culture information</param>
  /// <param name="tryDefaults">
  /// True: Fallbacks to default language if not found in current culture.
  /// </param>
  /// <returns>Localized string</returns>
  GetStringsOrNull(names: string[], culture: CultureInfo, tryDefaults?: boolean): string[];

  /// <summary>
  /// Gets all strings in current language.
  /// </summary>
  /// <param name="includeDefaults">
  /// True: Fallbacks to default language texts if not found in current culture.
  /// </param>
  GetAllStrings(includeDefaults?: boolean): LocalizedString[];

  /// <summary>
  /// Gets all strings in specified culture.
  /// </summary>
  /// <param name="culture">culture information</param>
  /// <param name="includeDefaults">
  /// True: Fallbacks to default language texts if not found in current culture.
  /// </param>
  GetAllStrings(culture: CultureInfo, includeDefaults?: boolean): LocalizedString[];
}