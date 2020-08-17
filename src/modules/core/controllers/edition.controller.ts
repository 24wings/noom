import { Controller, Get } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetEditionOutput } from '../dtos/get-edition.dto';
import { EditionService } from '../services/edition.service';
import { Edition } from '../entitys/edition.entity';
import {
  GetEditionForComboxOutput,
  GetEdtionComboxItem,
} from '../dtos/get-edition-for-comobx.output.dto';
@ApiTags('admin')
@Controller('api/services/app/Edition')
export class EditionController {
  constructor(private editionService: EditionService) {}
  @Get(`GetEditions`)
  @ApiResponse({ status: 200, type: GetEditionOutput, description: 'ok' })
  async GetEditions() {
    let result = await this.editionService.findAll();
    return new GetEditionOutput(result);
  }
}
