import { ILocalizationSourceList } from "./i-localization-source-list";
import { LocalizationSourceExtensionInfo } from "./localization-source-extension-info";

export class LocalizationSourceList implements ILocalizationSourceList {
  extensions: LocalizationSourceExtensionInfo[]

  /// <summary>
  /// Constructor.
  /// </summary>
  public LocalizationSourceList() {
    this.extensions = [];
  }
}