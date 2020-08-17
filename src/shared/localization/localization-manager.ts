import { ILocalizationSource } from "./sources/i-localization-source";
import { LocalizationConfiguration } from "./localization-configuration";
import { LanguageManager } from "./language-manager";
import { BadRequestException } from "@nestjs/common";
import { DictionaryBasedLocalizationSource } from "./dictionaries/dictionary-base-localization-source";
import { IDictionaryBasedLocalizationSource } from "./dictionaries/i-dictionary-based-localization-source";
import { ILocalizationManager } from "./i-localization-manager";

export class LocalizationManager implements ILocalizationManager {


  /// <summary>
  /// Constructor.
  /// </summary>
  constructor(
    private languageManager: LanguageManager,
    private configuration: LocalizationConfiguration,
    private sources: Map<string, ILocalizationSource> = new Map<string, ILocalizationSource>()
  ) {
  }

  public Initialize(): void {
    // this.InitializeSources();
  }

  private InitializeSources(): void {
    if (!this.configuration.isEnabled) {
      console.debug("Localization disabled.");
      return;
    }

    // Logger.Debug(string.Format("Initializing {0} localization sources.", _configuration.Sources.Count));
    for (var source of this.configuration.sources) {
      if (this.sources.has(source.name)) {
        throw new BadRequestException("There are more than one source with name: " + source.name + "! Source name must be unique!");
      }

      this.sources[source.name] = source;
      source.Initialize(this.configuration);

      //Extending dictionaries
      //   if (source instanceof DictionaryBasedLocalizationSource)
      //   {
      //     var dictionaryBasedSource = source as IDictionaryBasedLocalizationSource;
      //     var extensions = this.configuration.sources.filter(e => e.sourceName == source.name);
      //     for(var extension of extensions)
      //     {
      //       extension.DictionaryProvider.Initialize(source.Name);
      //       foreach(var extensionDictionary in extension.DictionaryProvider.Dictionaries.Values)
      //       {
      //         dictionaryBasedSource.Extend(extensionDictionary);
      //       }
      //     }
      //   }

      //   Logger.Debug("Initialized localization source: " + source.Name);
    }
  }

  /// <summary>
  /// Gets a localization source with name.
  /// </summary>
  /// <param name="name">Unique name of the localization source</param>
  /// <returns>The localization source</returns>
  public getSource(name: string): ILocalizationSource {
    if (!this.configuration.isEnabled) {
      return null;
    }

    if (name == null) {
      throw new BadRequestException("name");
    }

    let source: ILocalizationSource;
    if (!this.sources.has(name)) {
      throw new BadRequestException("Can not find a source with name: " + name);
    } else {
      source = this.sources.get(name);

    }

    return source;
  }

  /// <summary>
  /// Gets all registered localization sources.
  /// </summary>
  /// <returns>List of sources</returns>
  getAllSources(): ILocalizationSource[] {
    return Array.from(this.sources.values());
  }
}