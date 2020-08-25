import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';

@ApiExtraModels()
export class SalesItem {
  @ApiProperty({ description: '购买用户的头像' })
  head_pic: string;
}

@ApiExtraModels()
export class PageGoodItem {
  @ApiProperty({ description: '商品id' })
  public goods_id: number;
  @ApiProperty({ description: '排序' })
  sort: number;
  @ApiProperty({ description: '商品名称' })
  goods_name: string;
  @ApiProperty({ description: '商品sku属性' })
  sku: string;
  @ApiProperty({ description: '商品标签' })
  good_tag: string;
  @ApiProperty({ description: '标签颜色' })
  tag_color: string;
  @ApiProperty({ description: '子标题' })
  subheading: string;
  @ApiProperty({ description: '二号标签' })
  good_tag2: string;
  @ApiProperty({ description: '商品标签2' })
  origin_img: string;
  @ApiProperty({ description: '商品市场价' })
  market_price: string;
  @ApiProperty({ description: '是否允许购买' })
  can_buy: boolean;
  @ApiProperty({ description: '' })
  lv_flag: number;
  @ApiProperty({ description: '' })
  lv_remark: string;
  @ApiProperty({ description: '购买人数总计' })
  sales_user_count: number;
  @ApiProperty({ description: '销售数量总计' })
  sales_sum: number;
  @ApiProperty({ description: '商品销售额数量' })
  goods_sales_sum: number;
  @ApiProperty({ description: '转售' })
  resale: number;
  @ApiProperty({ description: '是否是我的商品' })
  is_me: boolean;
  @ApiProperty({ description: '价格' })
  price: string;
  @ApiProperty({ description: '步骤数量' })
  'step_num': number;
  @ApiProperty({ description: '限制购买数量' })
  'limit_buy': 0;
  @ApiProperty({ description: '商品库存数量' })
  'store_count': number;
  @ApiProperty({ description: '' })
  'buy_num': number;
  @ApiProperty({ description: '活动销售数量' })
  'topic_sales_sum': number;
  @ApiProperty({ description: '分布点转售信息' })
  'distribute_resale_info': string;
  @ApiProperty({ description: '用户转售信息' })
  user_resale_info: string;
  @ApiProperty({ description: '销售列表', type: SalesItem, isArray: true })
  sales_list: SalesItem[];
  @ApiProperty({ description: '标签列表', isArray: true, type: String })
  tags: string[];
  @ApiProperty({ description: '库存计数' })
  store_count_show: number;
  @ApiProperty({ description: '标签列表' })
  labels: string[];
  @ApiProperty({ description: '是否有合同' })
  contract: number;
  @ApiProperty({ description: '图片协议' })
  origin_img_https: string;
  @ApiProperty({ description: '是否替代品' })
  is_substitute: 0;
  @ApiProperty({ description: '销售数量描述' })
  sales_sum_desc: string;
  @ApiProperty({ description: '库存数量描述' })
  store_count_desc: string;
}

@ApiExtraModels()
export class PageGoodsOutputDto extends ShopCommonOutput {
  @ApiProperty({ description: '结果', type: PageGoodItem })
  rows: PageGoodItem[];
}
