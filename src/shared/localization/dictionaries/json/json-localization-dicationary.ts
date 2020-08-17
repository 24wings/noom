/// <summary>
///     This class is used to build a localization dictionary from json.
/// </summary>
/// <remarks>
///     Use static Build methods to create instance of this class.
import * as fs from 'fs';
import { CultureInfo } from "../culture-info";
import { BadRequestException } from '@nestjs/common';
import { JsonLocalizationFile } from './json-localization-file';
import { LocalizationDictionary } from '../localization-dictionary';

/// </remarks>
export class JsonLocalizationDictionary extends LocalizationDictionary {
  /// <summary>
  ///     Private constructor.
  /// </summary>
  /// <param name="cultureInfo">Culture of the dictionary</param>
  private constructor(cultureInfo: CultureInfo) {
    super(cultureInfo)
  }

  /// <summary>
  ///     Builds an <see cref="JsonLocalizationDictionary" /> from given file.
  /// </summary>
  /// <param name="filePath">Path of the file</param>
  public static BuildFromFile(filePath: string): JsonLocalizationDictionary {
    try {
      let data = fs.readFileSync(filePath, { encoding: 'utf-8' });
      return JsonLocalizationDictionary.BuildFromJsonString(data);
    }
    catch (ex) {
      // console.log(ex);
      throw new BadRequestException("Invalid localization file format! " + filePath, ex);
    }
  }

  /// <summary>
  ///     Builds an <see cref="JsonLocalizationDictionary" /> from given json string.
  /// </summary>
  /// <param name="jsonString">Json string</param>
  public static BuildFromJsonString(jsonString: string): JsonLocalizationDictionary {
    let jsonFile: JsonLocalizationFile;
    try {
      jsonFile = JSON.parse(jsonString);

    }
    catch (ex) {
      throw new BadRequestException("Can not parse json string. " + ex.Message);
    }

    var cultureCode = jsonFile.culture;
    if (!cultureCode) {
      throw new BadRequestException("Culture is empty in language json file.");
    }

    var dictionary = new JsonLocalizationDictionary(CultureInfo.getCultureInfo(cultureCode));
    var dublicateNames = new Array<string>();
    for (let item in jsonFile.texts) {
      if (!item) {
        throw new BadRequestException("The key is empty in given json string.");
      }

      if (dictionary.contains(item)) {
        // console.log('dobleicateNames',item)
        dublicateNames.push(item);
      }
      // console.log('item:',item)

      dictionary[item] = jsonFile.texts[item].trimRight();
    }

    if (dublicateNames.length > 0) {
      throw new BadRequestException(
        "A dictionary can not contain same key twice. There are some duplicated names: " +
        dublicateNames.join(", "));
    }

    return dictionary;
  }

}