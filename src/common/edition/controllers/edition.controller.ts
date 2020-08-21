import { Controller, Get } from "@nestjs/common";

@Controller('api/services/app/Edition')
export class EditionController {

  @Get("GetEditionComboboxItems")
  GetEditionComboboxItems() {
    return { "result": [{ "isFree": null, "value": "-1", "displayText": "- 全部 -", "isSelected": false }, { "isFree": null, "value": "", "displayText": "没有分配", "isSelected": false }, { "isFree": true, "value": "1", "displayText": "Standard", "isSelected": false }], "targetUrl": null, "success": true, "error": null, "unAuthorizedRequest": false, "__abp": true }
  }

}