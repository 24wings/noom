import { CommonOutput } from 'src/shared/dtos/common-output.dto';
import { Edition } from '../../../database/repositorys/entitys/edition/edition.entity';
import { ComboboxItemDto } from 'src/shared/dtos/combobox-item.dto';
import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels()
export class GetEdtionComboxItem extends ComboboxItemDto {
  @ApiProperty({ description: '是否免费' })
  isFree: boolean;

  constructor(opt: {
    value: string;
    displayText: string;
    isSelected: boolean;
    isFree: boolean;
  }) {
    super();
    this.value = opt.value;
    this.displayText = opt.displayText;
    this.isSelected = opt.isSelected;
    this.isFree = opt.isFree;
  }
}

@ApiExtraModels()
export class GetEditionForComboxResult {
  @ApiProperty()
  items: GetEdtionComboxItem[];
  constructor(items: GetEdtionComboxItem[]) {
    this.items = items;
  }
}

@ApiExtraModels()
export class GetEditionForComboxOutput extends CommonOutput {
  @ApiProperty()
  result: GetEditionForComboxResult;
  constructor(items: GetEdtionComboxItem[]) {
    super();
    this.result = new GetEditionForComboxResult(items);
  }
}
