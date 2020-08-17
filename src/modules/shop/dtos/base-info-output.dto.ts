import { Distribut } from '../entitys/distribut.entity';
import { StatisticsInfo } from '../entitys/statistics.entity';
import { ApiExtraModels, ApiProperty, ApiBody } from '@nestjs/swagger';

@ApiExtraModels()
export class CategoryInfo {
  @ApiProperty({ description: '分类id' })
  id: number;
  @ApiProperty({ description: '分类图标图片' })
  img_url: string;
  @ApiProperty({ description: '分类名称' })
  name: string;
}

@ApiExtraModels()
export class TopicInfo {
  @ApiProperty({
    description: '开放类型',
    example: { type: 'username', name: '123' },
  })
  open_type: number;
  @ApiProperty({ description: '活动开始时间' })
  addtime: number;
  @ApiProperty({ description: '分布点id' })
  distribute_id: number;
  @ApiProperty({ description: '活动结束时间' })
  endtime: number;
  @ApiProperty({ description: '是否开放' })
  is_open: boolean;
  @ApiProperty({ description: '商户id' })
  mch_id: number;
  @ApiProperty({ description: '供应商id' })
  supplier_id: number;
  @ApiProperty({ description: '活动标题' })
  topic_title: string;
  @ApiProperty({ description: 'topic_id' })
  topic_id: number;
}

@ApiExtraModels()
export class BaseInfoResult {
  @ApiProperty({ description: '分类信息', type: CategoryInfo, isArray: true })
  categoryInfo: CategoryInfo[];
  @ApiProperty({ description: '分布点信息' })
  distributInfo: Distribut;
  @ApiProperty({ description: '统计信息' })
  statisticsInfo: StatisticsInfo;
  @ApiProperty({ description: '活动信息' })
  topicInfo: TopicInfo;
}

@ApiExtraModels()
export class BaseInfo {
  @ApiProperty({ description: '结果' })
  rows: BaseInfoResult;
}
