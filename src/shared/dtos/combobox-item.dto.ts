import { CommonOutput } from './common-output.dto';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class ComboboxItemDto extends CommonOutput {
  @ApiProperty()
  value: string;
  @ApiProperty()
  displayText: string;
  @ApiProperty()
  isSelected: boolean;
}
