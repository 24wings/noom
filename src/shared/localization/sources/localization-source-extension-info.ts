import { ILocalizationDictionaryProvider } from "../dictionaries/i-localization-dictionary-provider-base";

export class LocalizationSourceExtensionInfo {
  /// <summary>
  /// Source name.
  /// </summary>
  sourceName: string;

  /// <summary>
  /// Extension dictionaries.
  /// </summary>
  public dictionaryProvider: ILocalizationDictionaryProvider;

  /// <summary>
  /// Creates a new <see cref="LocalizationSourceExtensionInfo"/> object.
  /// </summary>
  /// <param name="sourceName">Source name</param>
  /// <param name="dictionaryProvider">Extension dictionaries</param>
  public constructor(sourceName: string, dictionaryProvider: ILocalizationDictionaryProvider) {
    this.sourceName = sourceName;
    this.dictionaryProvider = dictionaryProvider;
  }
}