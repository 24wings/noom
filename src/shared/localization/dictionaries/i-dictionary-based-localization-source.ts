/// <summary>
/// Interface for a dictionary based localization source.

import { ILocalizationDictionaryProvider } from "./i-localization-dictionary-provider-base";
import { ILocalizationDictionary } from "./i-localization-dictionary";
import { ILocalizationSource } from "../sources/i-localization-source";

/// </summary>
export interface IDictionaryBasedLocalizationSource extends ILocalizationSource {
  /// <summary>
  /// Gets the dictionary provider.
  /// </summary>
  dictionaryProvider: ILocalizationDictionaryProvider

  /// <summary>
  /// Extends the source with given dictionary.
  /// </summary>
  /// <param name="dictionary">Dictionary to extend the source</param>
  extend(dictionary: ILocalizationDictionary): void;
}