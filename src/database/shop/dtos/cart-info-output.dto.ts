import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';
@ApiExtraModels()
export class CartGoodInfo {
  @ApiProperty({ description: '商品id' })
  'goods_id': number;
  @ApiProperty({ description: '排序' })
  'sort': number;
  @ApiProperty({ description: '商品名称' })
  'goods_name': string;
  @ApiProperty({ description: 'sku' })
  'sku': string;
  @ApiProperty({ description: '商品标签' })
  'goods_tag': string;
  @ApiProperty({ description: '标签颜色' })
  'tag_color': string;
  @ApiProperty({ description: '子标题' })
  'subheading': string;
  @ApiProperty({ description: '二号标签' })
  'goods_tag2': string;
  @ApiProperty({ description: '2号标签颜色' })
  'tag_color2': string;
  @ApiProperty({ description: '原始图片' })
  'origin_img': string;
  @ApiProperty({ description: '市场价格' })
  'market_price': string;
  @ApiProperty({ description: '是否可以购买' })
  'can_buy': boolean;
  @ApiProperty({ description: '' })
  'lv_flag': number;
  @ApiProperty({ description: '' })
  'lv_remark': string;
  @ApiProperty({ description: '已购买的用户数量' })
  'sales_user_count': string;
  @ApiProperty({ description: '销售量' })
  'sales_sum': string;
  @ApiProperty({ description: '商品销售总和' })
  'goods_sales_sum': number;
  @ApiProperty({ description: '转售数量' })
  'resale': number;
  @ApiProperty({ description: '是否是我的商品' })
  'is_me': boolean;
  @ApiProperty({ description: '价格' })
  'price': string;
  @ApiProperty({ description: '步骤' })
  'step_num': number;
  @ApiProperty({ description: '限制购买数量' })
  'limit_buy': number;
  @ApiProperty({ description: '库存数量' })
  'store_count': number;
  @ApiProperty({ description: '销售数量' })
  'buy_num': number;
  @ApiProperty({ description: '当前活动售卖数量' })
  'topic_sales_sum': number;
  @ApiProperty({ description: '分布点 转售信息' })
  'distribute_resale_info': string;
  @ApiProperty({ description: '用户转售信息' })
  'user_resale_info': string;
  @ApiProperty({ description: '已销售列表' })
  'sales_list': string[];
  @ApiProperty({ description: '标签列表' })
  'tags': string[];
  @ApiProperty({ description: '库存计数显示' })
  'store_count_show': number;
  @ApiProperty({ description: '标签列表' })
  'labels': string[];
  @ApiProperty({ description: '合约' })
  'contract': number;
  @ApiProperty({ description: '原始图片' })
  'origin_img_https': string;
  @ApiProperty({ description: '是否是替代品' })
  'is_substitute': 0;
  @ApiProperty({ description: '销售额说明' })
  'sales_sum_desc': string;
  @ApiProperty({ description: '库存数量说明' })
  'store_count_desc': string;
}
@ApiExtraModels()
export class CartItem {
  @ApiProperty({ description: '商品id' })
  'goods_id': number;
  @ApiProperty({ description: '商品数量' })
  'goods_num': number;
  @ApiProperty({ description: '已选择数量' })
  'selected': boolean;
  @ApiProperty({ description: '商品信息', type: CartGoodInfo })
  'goodsInfo': CartGoodInfo;
}

@ApiExtraModels()
export class CartDataOutput {
  @ApiProperty({ description: '是否开放' })
  'is_open': boolean;
  @ApiProperty({ description: '开放类型' })
  'open_type': number;
  @ApiProperty({ description: '加入时间' })
  'addtime': number;
  @ApiProperty({ description: '结束时间' })
  'endtime': number;
  @ApiProperty({ description: '数量' })
  'total': number;
  @ApiProperty({ description: '选择的数量' })
  'total_selected': number;
  @ApiProperty({ description: '商品列表', isArray: true, type: CartItem })
  'list': CartItem[];
}

@ApiExtraModels()
export class CartInfoOutput extends ShopCommonOutput {
  @ApiProperty({ description: '结果', type: CartDataOutput })
  'rows': CartDataOutput;
}
