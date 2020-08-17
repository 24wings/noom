import { Feature } from 'src/modules/core/entitys/feature.entity';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { Edition } from 'src/modules/core/entitys/edition.entity';

@ApiExtraModels()
export class CreateEditionInput {
  @ApiProperty()
  edition: Edition;
  @ApiProperty()
  featureValues: Feature[];
}
