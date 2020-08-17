import { ILocalizationDictionaryProvider } from "./i-localization-dictionary-provider-base";
import { ILocalizationDictionary } from "./i-localization-dictionary";
import { BadRequestException } from "@nestjs/common";

export abstract class LocalizationDictionaryProviderBase implements ILocalizationDictionaryProvider {
  sourceName: string;

  public defaultDictionary: ILocalizationDictionary;

  dictionaries: { [k: string]: ILocalizationDictionary }

   constructor() {
    this.dictionaries = {};
  }

  public initialize(sourceName: string): void {
    this.sourceName = sourceName;
    this.initializeDictionaries();
  }

  public extend(dictionary: ILocalizationDictionary): void {
    //Add
    let existingDictionary: ILocalizationDictionary;
    if (!this.dictionaries[dictionary.cultureInfo.name]) {
      this.dictionaries[dictionary.cultureInfo.name] = dictionary;
      return;
    }

    //Override
    var localizedStrings = dictionary.getAllStrings();
    for (let localizedString of localizedStrings) {
      existingDictionary.set(localizedString.name, localizedString.value);
    }
  }

  initializeDictionaries(): void {

  }


  public initializeDictionary(dictionary: ILocalizationDictionary, isDefault: boolean = false): void {
    if (this.dictionaries[dictionary.cultureInfo.name]) {
      throw new BadRequestException(this.sourceName + " source contains more than one dictionary for the culture: " + dictionary.cultureInfo.name);
    }

    this.dictionaries[dictionary.cultureInfo.name] = dictionary;

    if (isDefault) {
      if (this.defaultDictionary != null) {
        throw new BadRequestException("Only one default localization dictionary can be for source: " + this.sourceName);
      }

      this.defaultDictionary = dictionary;
    }
  }
}