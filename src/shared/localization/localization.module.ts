import { Module, OnModuleInit, Global, OnApplicationBootstrap } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { LocalizationDictionaryProviderBase } from "./dictionaries/localization-dictionary-provider-base";
import { JsonFileLocalizationDictionaryProvider } from "./dictionaries/json-file-localization-dictionary-provider";
import * as path from 'path';
import { DefaultLanguageProvider } from "./language-provider";
import { LocalizationConfiguration } from "./localization-configuration";

@Global()
@Module({
  imports: [],
  providers: [JsonFileLocalizationDictionaryProvider,
    DefaultLanguageProvider,
    LocalizationConfiguration,
    
  ]
})
export class LocalizationModule implements OnApplicationBootstrap{
  constructor(private moduleRef:ModuleRef){}
 async onApplicationBootstrap() {
    let p = new JsonFileLocalizationDictionaryProvider(path.resolve(__dirname, '../../assets/localization'));
   p.initializeDictionaries();
   
    // console.log(p.dictionaries)
  }
  
  

}