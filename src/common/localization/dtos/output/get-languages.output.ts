import { CommonOutput } from "src/shared/dtos/common-output.dto";
import { LanguageInfo } from "src/database/repositorys/entitys/localization/languageInfo.entity";
import { ApiProperty } from "@nestjs/swagger";

export class GetLanguageResult {
  @ApiProperty()
  defaultLanguage: string;
  @ApiProperty()
  items: LanguageInfo[];
}

export class GetLanguagesOutput extends CommonOutput {
  @ApiProperty()
  result: GetLanguageResult;
}