import { Controller, Get } from "@nestjs/common";
import { GetEditionOutput } from "../dtos/get-edition.dto";
import { ApiResponse } from "@nestjs/swagger";
import { EditionService } from "src/database/repositorys/services/edition.service";

@Controller('api/services/app/Edition')
export class EditionController {
  constructor(private editionService: EditionService) { }
  @Get("GetEditionComboboxItems")
  GetEditionComboboxItems() {
    return { "result": [{ "isFree": null, "value": "-1", "displayText": "- 全部 -", "isSelected": false }, { "isFree": null, "value": "", "displayText": "没有分配", "isSelected": false }, { "isFree": true, "value": "1", "displayText": "Standard", "isSelected": false }], "targetUrl": null, "success": true, "error": null, "unAuthorizedRequest": false, "__abp": true }
  }

  @Get(`GetEditions`)
  @ApiResponse({ status: 200, type: GetEditionOutput, description: 'ok' })
  async GetEditions() {
    let result = await this.editionService.findAll();
    return new GetEditionOutput(result);
  }

}