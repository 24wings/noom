import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';
import { SalesItem } from './page-goods.output';

@ApiExtraModels()
export class BuyGoodRecord {
  @ApiProperty({ description: '头像' })
  'head_pic': string;
  @ApiProperty({ description: '商品数量' })
  'goods_num': number;
  @ApiProperty({ description: '昵称' })
  'nickname': string;
  @ApiProperty({ description: '购买时间' })
  'add_time': Date;
}

@ApiExtraModels()
export class GetGoodResult {
  @ApiProperty({ description: '商品id' })
  'goods_id': number;
  @ApiProperty({ description: '排序' })
  'sort': number;
  @ApiProperty({ description: '商品名称' })
  'goods_name': string;
  @ApiProperty({ description: '商品sku' })
  'sku': string;
  @ApiProperty({ description: '商品标签' })
  'goods_tag': '';
  @ApiProperty({ description: '标签颜色' })
  'tag_color': '';
  @ApiProperty({ description: '子标题' })
  'subheading': string;
  @ApiProperty({ description: '商品2号标签' })
  'goods_tag2': '';
  @ApiProperty({ description: '标签颜色' })
  'tag_color2': '';
  @ApiProperty({ description: '原始图片' })
  'origin_img': string;
  @ApiProperty({ description: '市场价格' })
  'market_price': string;
  @ApiProperty({ description: '是否可以购买' })
  'can_buy': boolean;
  @ApiProperty({ description: '' })
  'lv_flag': 0;
  @ApiProperty({ description: '' })
  'lv_remark': '';
  @ApiProperty({ description: '购买用户数量' })
  'sales_user_count': number;
  @ApiProperty({ description: '销售数量' })
  'sales_sum': number;
  @ApiProperty({ description: '商品销售数量' })
  'goods_sales_sum': number;
  @ApiProperty({ description: '转售' })
  'resale': number;
  @ApiProperty({ description: '是否是我的商品' })
  'is_me': boolean;
  @ApiProperty({ description: '价格' })
  'price': number;
  @ApiProperty({ description: '' })
  'step_num': number;
  @ApiProperty({ description: '限制购买数量' })
  limit_buy: number;
  @ApiProperty({ description: '库存数量' })
  store_count: number;
  @ApiProperty({ description: '购买数量' })
  buy_num: number;
  @ApiProperty({ description: '活动销售数量' })
  topic_sales_sum: number;
  @ApiProperty({ description: '分布点转售信息' })
  distribute_resale_info: string;
  @ApiProperty({ description: '用户转售信息' })
  user_resale_info: string;
  @ApiProperty({ description: '销售列表', type: SalesItem, isArray: true })
  sales_list: SalesItem[];
  @ApiProperty({ description: '标签数组', isArray: true, type: String })
  tags: string[];
  @ApiProperty({ description: '库存显示数量' })
  store_count_show: number;
  @ApiProperty({ description: '标签列表', type: String, isArray: true })
  labels: string[];
  @ApiProperty({ description: '约定类型' })
  contract: number;
  @ApiProperty({ description: '原始https图片' })
  'origin_img_https': string;
  @ApiProperty({ description: '是否替代品' })
  'is_substitute': 0;
  @ApiProperty({ description: '销售数量描述' })
  'sales_sum_desc': string;
  @ApiProperty({ description: '库存描述' })
  store_count_desc: string;
  @ApiProperty({ description: '购买记录', type: BuyGoodRecord, isArray: true })
  'records': BuyGoodRecord[];
  @ApiProperty({ description: '是否开放' })
  'isopen': boolean;
  @ApiProperty({ description: '结束时间' })
  'endtime': Date;
  'content_element_list': [{ type: 'text'; value: '1' }];
  @ApiProperty({ description: '图片列表', isArray: true, type: String })
  'goods_image_list': string[];
  @ApiProperty({ description: '是否可以分享' })
  'can_share': boolean;
  @ApiProperty({ description: '可见' })
  'can_see': boolean;
}

@ApiExtraModels()
export class GetGoodsOutputDto extends ShopCommonOutput {
  @ApiProperty({ description: '商品详情' })
  row: GetGoodResult;
}
