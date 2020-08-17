import { CultureInfo } from "./culture-info";
import { LocalizedString } from "./localized-string";

export interface ILocalizationDictionary {
  /// <summary>
  /// Culture of the dictionary.
  /// </summary>
  cultureInfo: CultureInfo


  /// <summary>
  /// Gets a <see cref="LocalizedString"/> for given <paramref name="name"/>.
  /// </summary>
  /// <param name="name">Name (key) to get localized string</param>
  /// <returns>The localized string or null if not found in this dictionary</returns>
  getOrNull(name: string): LocalizedString;

  /// <summary>
  /// Gets a <see cref="LocalizedString"/> for given <paramref name="names"/>.
  /// </summary>
  /// <param name="names">Names (key) to get list of localized strings</param>
  /// <returns>The localized string or null if not found in this dictionary</returns>
  getStringsOrNull(names: string[]): LocalizedString[]

  /// <summary>
  /// Gets a list of all strings in this dictionary.
  /// </summary>
  /// <returns>List of all <see cref="LocalizedString"/> object</returns>
  getAllStrings(): LocalizedString[];
  get(name: string)

  set(name: string, value: string)
}