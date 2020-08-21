import {
  Controller,
  Get,
  Query,
  Body,
  Post,
  Req,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiQuery, ApiResponse, ApiBody } from '@nestjs/swagger';
import {
  GetEditionForEditOutput,
  GetEditionResult,
} from '../dtos/get-edtion-for-edit.output';
import { EditionService } from 'src/database/repositorys/services/edition.service';
import { Edition } from 'src/database/repositorys/entitys/edition/edition.entity';
import { CreateEditionInput } from '../dtos/create-edition.input';
import { CommonOutput } from 'src/shared/dtos/common-output.dto';

@ApiTags('admin')
@Controller('api/services/app/Edition')
export class EditionController {
  constructor(
    private editionService: EditionService,
  ) { }

  @ApiQuery({ name: 'id', required: false, description: '版本id' })
  @ApiResponse({
    status: 200,
    type: GetEditionForEditOutput,
    description: 'ok',
  })
  @Get('GetEditionForEdit')
  async getEditionForEdit(
    @Query('id') id?: number,
  ): Promise<GetEditionForEditOutput> {
    let edition: Edition;
    if (id) {
      edition = await this.editionService.findOne(id);
    } else {
      edition = new Edition();
    }
    var result = new GetEditionForEditOutput();
    result.result = new GetEditionResult();
    result.result.edition = edition;
    // result.result.featureValues = await this.featureService.findAll();
    // result.result.features = await this.featureService.findAll();
    return result;
  }
  @HttpCode(200)
  @ApiBody({ type: CreateEditionInput })
  @Post(`CreateEdition`)
  async createEdition(@Body() edition: CreateEditionInput, @Req() req) {
    console.log(edition, req.body);
    let newEdition = new Edition();
    newEdition.name = edition.edition.displayName;
    newEdition.displayName = edition.edition.displayName;
    console.log(newEdition);
    await this.editionService.add(newEdition);
    return new CommonOutput();
  }
}
