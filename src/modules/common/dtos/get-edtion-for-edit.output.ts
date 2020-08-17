import { Controller, Get, Query } from '@nestjs/common';
import { ApiExtraModels, ApiQuery, ApiProperty } from '@nestjs/swagger';
import { Edition } from 'src/modules/core/entitys/edition.entity';
import { Feature } from 'src/modules/core/entitys/feature.entity';
import { CommonOutput } from 'src/shared/dtos/common-output.dto';

@ApiExtraModels()
export class GetEditionResult {
  @ApiProperty()
  edition: Edition;
  @ApiProperty()
  featureValues: Feature[];
  @ApiProperty()
  features: Feature[];
}

@ApiExtraModels()
export class GetEditionForEditOutput extends CommonOutput {
  @ApiProperty()
  result: GetEditionResult;
}
