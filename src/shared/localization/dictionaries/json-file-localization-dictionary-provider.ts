import * as fs from 'fs';
import { LocalizationDictionaryProviderBase } from './localization-dictionary-provider-base';
import { JsonLocalizationDictionary } from './json/json-localization-dicationary';
import { Injectable, OnApplicationBootstrap, Inject } from '@nestjs/common';


/// <summary>

///      Provides localization dictionaries from json files in a directory.
/// </summary>
@Injectable()
export class JsonFileLocalizationDictionaryProvider extends LocalizationDictionaryProviderBase implements OnApplicationBootstrap {
  private _directoryPath: string;

  /// <summary>
  ///     Creates a new <see cref="JsonFileLocalizationDictionaryProvider" />.
  /// </summary>
  /// <param name="directoryPath">Path of the dictionary that contains all related XML files</param>
  public constructor(@Inject('localization_dir') directoryPath: string) {
    super();
    this._directoryPath = directoryPath;
  }
  onApplicationBootstrap() {
    this.initializeDictionaries();
  }

  public initializeDictionaries(): void {
    var fileNames = fs.readdirSync(this._directoryPath).filter(r => r.endsWith('.json'))

    for (var fileName of fileNames) {
      if (fileName == 'zh-CN.json') {
        this.initializeDictionary(this.createJsonLocalizationDictionary(this._directoryPath + '/' + fileName), true);  
      } else {
        this.initializeDictionary(this.createJsonLocalizationDictionary(this._directoryPath + '/' + fileName));
      }
      
    }
  }

  public createJsonLocalizationDictionary(fileName: string): JsonLocalizationDictionary {
    return JsonLocalizationDictionary.BuildFromFile(fileName);
  }
}