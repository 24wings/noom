/// <summary>
/// This interface is used to manage localization system.

import { ILocalizationSource } from "./sources/i-localization-source";

/// </summary>
export interface ILocalizationManager {
  /// <summary>
  /// Gets a localization source with name.
  /// </summary>
  /// <param name="name">Unique name of the localization source</param>
  /// <returns>The localization source</returns>
  getSource(name: string): ILocalizationSource;

  /// <summary>
  /// Gets all registered localization sources.
  /// </summary>
  /// <returns>List of sources</returns>
  getAllSources(): ILocalizationSource[];
}