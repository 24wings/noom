/// <summary>
/// This class is used to build a localization source
/// which works on memory based dictionaries to find strings.

import { IDictionaryBasedLocalizationSource } from "./i-dictionary-based-localization-source";
import { ILocalizationDictionaryProvider } from "./i-localization-dictionary-provider-base";
import { ILocalizationConfiguration } from "../sources/i-localization-configuration";
import { LocalizationConfiguration } from "../localization-configuration";
import { CultureInfo } from "./culture-info";
import { BadRequestException } from "@nestjs/common";
import { ILocalizationDictionary } from "./i-localization-dictionary";

/// </summary>
export class DictionaryBasedLocalizationSource implements IDictionaryBasedLocalizationSource {


  localizationConfiguration: LocalizationConfiguration;


  /// <summary>
  ///
  /// </summary>
  /// <param name="name"></param>
  /// <param name="dictionaryProvider"></param>
  public constructor(public name: string, public dictionaryProvider: ILocalizationDictionaryProvider) {
    // Check.NotNullOrEmpty(name, nameof(name));
    // Check.NotNull(dictionaryProvider, nameof(dictionaryProvider));

  }
  extend(dictionary: ILocalizationDictionary): void {
    throw new Error("Method not implemented.");
  }
  sourceName: string;
  GetString(name: string): string;
  GetString(name: string, culture: CultureInfo): string;
  GetString(name: any, culture?: any) {
    throw new Error("Method not implemented.");
    return null;
  }
  GetStringOrNull(name: string, tryDefaults: boolean): string;
  GetStringOrNull(name: string, culture: CultureInfo, tryDefaults?: boolean): string;
  GetStringOrNull(name: any, culture: any, tryDefaults?: any) {
    throw new Error("Method not implemented.");
    return null;
  }
  getStrings(names: string[], culture?: CultureInfo): string[];
  getStrings(names: string[]);
  getStrings(names: any, culture?: any) {
    throw new Error("Method not implemented.");
    return null;
  }
  getStringsOrNull(names: string[], tryDefaults?: boolean) {
    throw new Error("Method not implemented.");
  }
  GetStringsOrNull(names: string[], culture: CultureInfo, tryDefaults?: boolean): string[] {
    throw new Error("Method not implemented.");
  }
  GetAllStrings(includeDefaults?: boolean): import("./localized-string").LocalizedString[];
  GetAllStrings(culture: CultureInfo, includeDefaults?: boolean): import("./localized-string").LocalizedString[];
  GetAllStrings(culture?: any, includeDefaults?: any) {
    throw new Error("Method not implemented.");
    return null;
  }

  /// <inheritdoc/>
  public Initialize(configuration: LocalizationConfiguration): void {
    this.localizationConfiguration = configuration;

    // _logger = iocResolver.IsRegistered(typeof (ILoggerFactory))
    //   ? iocResolver.Resolve<ILoggerFactory>().Create(typeof (DictionaryBasedLocalizationSource))
    //   : NullLogger.Instance;

    // DictionaryProvider.Initialize(Name);
  }

  /// <inheritdoc/>
  // public getString(name: string, culture=CultureInfo.CurrentUICulture): string {
  //   var value = this.GetStringOrNull(name, culture);

  //   if (value == null) {
  //     throw new  BadRequestException(name);
  //   }

  //   return value;
  // }



  // public string GetStringOrNull( name:string,  tryDefaults = true) {
  //   return GetStringOrNull(name, CultureInfo.CurrentUICulture, tryDefaults);
  // }

  //   public string GetStringOrNull(string name, CultureInfo culture, bool tryDefaults = true) {
  //     var cultureName = culture.Name;
  //     var dictionaries = DictionaryProvider.Dictionaries;

  //     //Try to get from original dictionary (with country code)
  //     ILocalizationDictionary originalDictionary;
  //     if (dictionaries.TryGetValue(cultureName, out originalDictionary)) {
  //       var strOriginal = originalDictionary.GetOrNull(name);
  //       if (strOriginal != null) {
  //         return strOriginal.Value;
  //       }
  //     }

  //     if (!tryDefaults) {
  //       return null;
  //     }

  //     //Try to get from same language dictionary (without country code)
  //     if (cultureName.Contains("-")) //Example: "tr-TR" (length=5)
  //     {
  //       ILocalizationDictionary langDictionary;
  //       if (dictionaries.TryGetValue(GetBaseCultureName(cultureName), out langDictionary)) {
  //         var strLang = langDictionary.GetOrNull(name);
  //         if (strLang != null) {
  //           return strLang.Value;
  //         }
  //       }
  //     }

  //     //Try to get from default language
  //     var defaultDictionary = DictionaryProvider.DefaultDictionary;
  //     if (defaultDictionary == null) {
  //       return null;
  //     }

  //     var strDefault = defaultDictionary.GetOrNull(name);
  //     if (strDefault == null) {
  //       return null;
  //     }

  //     return strDefault.Value;
  //   }



  //         public List < string > GetStrings(List < string > names, CultureInfo culture)
  // {
  //   var values = GetStringsInternal(names, culture);
  //   var nullValues = values.Where(x => x.Value == null).ToList();
  //   if (nullValues.Any()) {
  //     return ReturnGivenNamesOrThrowException(nullValues.Select(x => x.Name).ToList(), culture);
  //   }

  //   return values.Select(x => x.Value).ToList();
  // }

  //         public List < string > GetStringsOrNull(List < string > names, bool tryDefaults = true)
  // {
  //   return GetStringsInternal(names, CultureInfo.CurrentUICulture, tryDefaults).Select(x => x.Value).ToList();
  // }

  //         public List < string > GetStringsOrNull(List < string > names, CultureInfo culture, bool tryDefaults = true)
  // {
  //   return GetStringsInternal(names, culture, tryDefaults).Select(x => x.Value).ToList();
  // }

  //         private List < NameValue > GetStringsInternal(List < string > names, CultureInfo culture, bool includeDefaults = true)
  // {
  //   var cultureName = culture.Name;
  //   var dictionaries = DictionaryProvider.Dictionaries;

  //   //Try to get from original dictionary (with country code)
  //   ILocalizationDictionary originalDictionary;
  //   if (dictionaries.TryGetValue(cultureName, out originalDictionary)) {
  //     var strOriginal = originalDictionary.GetStringsOrNull(names);
  //     if (!strOriginal.IsNullOrEmpty()) {
  //       return strOriginal.Select(x => new NameValue(x.Name, x.Value)).ToList();
  //     }
  //   }

  //   if (!includeDefaults) {
  //     return null;
  //   }

  //   //Try to get from same language dictionary (without country code)
  //   if (cultureName.Contains("-")) //Example: "tr-TR" (length=5)
  //   {
  //     ILocalizationDictionary langDictionary;
  //     if (dictionaries.TryGetValue(GetBaseCultureName(cultureName), out langDictionary)) {
  //       var strLang = langDictionary.GetStringsOrNull(names);
  //       if (!strLang.IsNullOrEmpty()) {
  //         return strLang.Select(x => new NameValue(x.Name, x.Value)).ToList();;
  //       }
  //     }
  //   }

  //   //Try to get from default language
  //   var defaultDictionary = DictionaryProvider.DefaultDictionary;
  //   if (defaultDictionary == null) {
  //     return null;
  //   }

  //   var strDefault = defaultDictionary.GetStringsOrNull(names);
  //   if (strDefault.IsNullOrEmpty()) {
  //     return null;
  //   }

  //   return strDefault.Select(x => new NameValue(x.Name, x.Value)).ToList();
  // }

  //         /// <inheritdoc/>
  //         public IReadOnlyList < LocalizedString > GetAllStrings(bool includeDefaults = true)
  // {
  //   return GetAllStrings(CultureInfo.CurrentUICulture, includeDefaults);
  // }

  //         /// <inheritdoc/>
  //         public IReadOnlyList < LocalizedString > GetAllStrings(CultureInfo culture, bool includeDefaults = true)
  // {
  //   //TODO: Can be optimized (example: if it's already default dictionary, skip overriding)

  //   var dictionaries = DictionaryProvider.Dictionaries;

  //   //Create a temp dictionary to build
  //   var allStrings = new Dictionary<string, LocalizedString>();

  //   if (includeDefaults) {
  //     //Fill all strings from default dictionary
  //     var defaultDictionary = DictionaryProvider.DefaultDictionary;
  //     if (defaultDictionary != null) {
  //       foreach(var defaultDictString in defaultDictionary.GetAllStrings())
  //       {
  //         allStrings[defaultDictString.Name] = defaultDictString;
  //       }
  //     }

  //     //Overwrite all strings from the language based on country culture
  //     if (culture.Name.Contains("-")) {
  //       ILocalizationDictionary langDictionary;
  //       if (dictionaries.TryGetValue(GetBaseCultureName(culture.Name), out langDictionary)) {
  //         foreach(var langString in langDictionary.GetAllStrings())
  //         {
  //           allStrings[langString.Name] = langString;
  //         }
  //       }
  //     }
  //   }

  //   //Overwrite all strings from the original dictionary
  //   ILocalizationDictionary originalDictionary;
  //   if (dictionaries.TryGetValue(culture.Name, out originalDictionary)) {
  //     foreach(var originalLangString in originalDictionary.GetAllStrings())
  //     {
  //       allStrings[originalLangString.Name] = originalLangString;
  //     }
  //   }

  //   return allStrings.Values.ToImmutableList();
  // }

  //         /// <summary>
  //         /// Extends the source with given dictionary.
  //         /// </summary>
  //         /// <param name="dictionary">Dictionary to extend the source</param>
  //         public virtual void Extend(ILocalizationDictionary dictionary)
  // {
  //   DictionaryProvider.Extend(dictionary);
  // }

  //         protected virtual string ReturnGivenNameOrThrowException(string name, CultureInfo culture)
  // {
  //   return LocalizationSourceHelper.ReturnGivenNameOrThrowException(
  //     LocalizationConfiguration,
  //     Name,
  //     name,
  //     culture,
  //     _logger
  //   );
  // }

  //         protected virtual List < string > ReturnGivenNamesOrThrowException(List < string > names, CultureInfo culture)
  // {
  //   return LocalizationSourceHelper.ReturnGivenNamesOrThrowException(
  //     LocalizationConfiguration,
  //     Name,
  //     names,
  //     culture,
  //     _logger
  //   );
  // }

  //         private static string GetBaseCultureName(string cultureName)
  // {
  //   return cultureName.Contains("-")
  //     ? cultureName.Left(cultureName.IndexOf("-", StringComparison.Ordinal))
  //     : cultureName;
  // }
}