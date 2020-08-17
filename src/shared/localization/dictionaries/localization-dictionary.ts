import { ILocalizationDictionary } from "./i-localization-dictionary";
import { CultureInfo } from "./culture-info";
import { LocalizedString } from "./localized-string";

export class LocalizationDictionary implements ILocalizationDictionary {
  /// <inheritdoc/>
  public cultureInfo: CultureInfo;



  _dictionary: Map<string, LocalizedString>;

  /// <summary>
  /// Creates a new <see cref="LocalizationDictionary"/> object.
  /// </summary>
  /// <param name="cultureInfo">Culture of the dictionary</param>
  public constructor(cultureInfo: CultureInfo) {
    this.cultureInfo = cultureInfo;
    this._dictionary = new Map();
  }

  get(name: string) {
    return this._dictionary.get(name);
  }
  set(name: string, value: string) {
    this._dictionary.set(name, new LocalizedString(name, value, this.cultureInfo));
  }

  /// <inheritdoc/>
  public getOrNull(name: string): LocalizedString {
    return this._dictionary[name];
  }

  /// <inheritdoc/>
  public getStringsOrNull(names: string[]): LocalizedString[] {
    return names.map(k => {
      let exsit = false;
      return Array.from(this._dictionary.values()).find(v => v.name == name) || new LocalizedString(name, null, this.cultureInfo);
    });

  }

  /// <inheritdoc/>
  public getAllStrings(): LocalizedString[] {
    return Array.from(this._dictionary.values());
  }

  /// <inheritdoc/>
  public getEnumerator(): LocalizedString[] {
    return this.getAllStrings();
  }


  protected contains(name: string): boolean {
    return this._dictionary.has(name);
  }
}