import { Controller, Get } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import {
  GetEditionForComboxOutput,
  GetEdtionComboxItem,
} from 'src/modules/core/dtos/get-edition-for-comobx.output.dto';
import { Edition } from 'src/modules/core/entitys/edition.entity';
import { EditionService } from 'src/modules/core/services/edition.service';

@Controller('api/services/app/CommonLookup')
export class CommonLookupController {
  constructor(private editionService: EditionService) {}
  @Get(`GetEditionsForCombobox`)
  @ApiQuery({ name: 'onlyFreeItems', description: '是否只拉取免费版本' })
  @ApiResponse({ status: 200, type: GetEditionForComboxOutput })
  async getEditionsForCombobox(onlyFreeItems = false) {
    let data: Edition[];
    if (onlyFreeItems) {
      data = await this.editionService.getEditonFree();
    } else {
      data = await this.editionService.findAll();
    }
    return new GetEditionForComboxOutput(
      data.map(
        item =>
          new GetEdtionComboxItem({
            value: item.id + '',
            displayText: item.name,
            isSelected: false,
            isFree: item.isFree,
          }),
      ),
    );
  }
}