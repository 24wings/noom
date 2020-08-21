import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { Edition } from '../../../database/repositorys/entitys/edition/edition.entity';

@ApiExtraModels()
export class GetEditionResult {
  @ApiProperty({ description: '结果', type: Edition, isArray: true })
  items: Edition[];
  constructor(result: Edition[]) {
    this.items = result;
  }
}
@ApiExtraModels()
export class GetEditionOutput {
  @ApiProperty()
  result: GetEditionResult;
  targetUrl = null;
  'success' = true;
  'error' = null;
  'unAuthorizedRequest' = false;
  '__abp' = true;

  constructor(result: Edition[]) {
    this.result = new GetEditionResult(result);
  }
}
