import { Controller, Get, Query } from '@nestjs/common';
import { ApiExtraModels, ApiQuery, ApiProperty } from '@nestjs/swagger';
import { Edition } from 'src/database/repositorys/entitys/edition/edition.entity';
import { CommonOutput } from 'src/shared/dtos/common-output.dto';
import { Feature } from 'src/database/repositorys/entitys/feature/feature.entity';

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
