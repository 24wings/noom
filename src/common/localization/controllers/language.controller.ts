import { Controller, Get } from "@nestjs/common";
import { GetLanguagesOutput } from "../dtos/output/get-languages.output";
import { LanguageService } from "../../../database/repositorys/services/localization/language.service";
import { CommonOutput } from "src/shared/dtos/common-output.dto";

@Controller(`api/services/app/Language`)
export class LanguageController {
  constructor(private languageService: LanguageService) { }

  @Get('GetLanguages')
  async GetLanguages(): Promise<GetLanguagesOutput> {
    const data = await this.languageService.getLangugesAndDefaultLanguage()
    return Object.assign(new CommonOutput(), { result: data })
  }

}