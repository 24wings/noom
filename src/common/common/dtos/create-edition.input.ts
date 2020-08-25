import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { Edition } from 'src/database/repositorys/entitys/edition/edition.entity';
import { Feature } from 'src/database/repositorys/entitys/feature/feature.entity';

@ApiExtraModels()
export class CreateEditionInput {
  @ApiProperty()
  edition: Edition;
  @ApiProperty()
  featureValues: Feature[];
}
