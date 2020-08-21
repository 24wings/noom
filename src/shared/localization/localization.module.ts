import { Module, OnModuleInit, Global, OnApplicationBootstrap, DynamicModule, ValueProvider } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { LocalizationDictionaryProviderBase } from "./dictionaries/localization-dictionary-provider-base";
import { JsonFileLocalizationDictionaryProvider } from "./dictionaries/json-file-localization-dictionary-provider";
import * as path from 'path';
import { DefaultLanguageProvider } from "./language-provider";
import { LocalizationConfiguration } from "./localization-configuration";
import { LanguageManager } from "./language-manager";
import { LocalizationManager } from "./localization-manager";

@Global()
@Module({
  imports: [],
  providers: [
    { provide: 'localization_dir', useValue: path.resolve(__dirname,'../../assets/localization') } as ValueProvider,

    {
      provide: LocalizationDictionaryProviderBase,
      useClass: JsonFileLocalizationDictionaryProvider
    },
    
    DefaultLanguageProvider,
    LocalizationConfiguration,
    LanguageManager,
    LocalizationManager
    
  ],
  exports:[]
})
export class LocalizationModule implements OnApplicationBootstrap{
  constructor(private moduleRef:ModuleRef){}
 async onApplicationBootstrap() {
  //  let p = new JsonFileLocalizationDictionaryProvider(path.resolve(__dirname, '../../assets/localization'));
   let localizationManager = await this.moduleRef.resolve(LocalizationManager);
   let source = localizationManager.getAllSources();
   console.log(source);
   
  //  p.initializeDictionaries();
  //  console.log(p.dictionaries);
  //  configuration.sources;
   
    // console.log(p.dictionaries)
  }

  
  
  

}