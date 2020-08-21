import { ILocalizationDictionary } from "./i-localization-dictionary";

/** 
 * :TODO:
*/
export interface ILocalizationDictionaryProvider {
  defaultDictionary: ILocalizationDictionary;

  dictionaries: { [t: string]: ILocalizationDictionary };

  initialize(sourceName: string): void;

  extend(dictionary: ILocalizationDictionary): void;
}