import { Controller, Get, HttpService } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import {
  GetGoodsMenuOutput,
  GetGoodsMenuItem,
} from '../dtos/get-goods-menu.output';
import { CateOutput } from '../dtos/cate.output.dto';
import * as fs from 'fs';
@Controller('api/monitor')
export class MonitorController {
  constructor(private http: HttpService) {}
  static url: string =
    'https://resourcesapi.youxianbianli.com/goodscategory/getSubGoodsMenu';
  static cateUrl: string =
    'https://resourcesapi.youxianbianli.com/goodscategory/goodsCategoryList?pickup_id=403247&lg_wh_id=101&transfer_id=0';
  @ApiOperation({ summary: '返回商品报告,品类价格' })
  @Get('getShopProductAndPrice')
  async getShopProductAndPrice() {
    let result = [];
    let cates = await this.getCates();
    for (let cate of cates.rows) {
      let more_page = true;
      let page_num = 1;

      do {
        let res = await this.getGoods(page_num, cate.id);
        result.push(...res.rows.goods);
        more_page = res.more_page;
        console.log(JSON.stringify(res));
        page_num++;
      } while (more_page);
    }
    fs.writeFileSync(__dirname + '/reslt.json', JSON.stringify(result));

    return result as any;
  }

  async getGoods(
    page_num: number,
    parentId: number,
  ): Promise<GetGoodsMenuOutput> {
    let res = await this.http
      .post(
        MonitorController.url,
        {
          pickup_id: 403247,
          lg_wh_id: 101,
          transfer_id: 0,
          parentId: parentId,
          pickupPid: 403247,
          subCategoryId: 0,
          catGroup: '1',
          page_num: page_num,
          page_size: 10,
          cityId: 420100,
          areaId: 420105,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            xcmchid: 9001,
            xctoken:
              'jaq7+UslbzoDGwOzpDjn/fCs7td26AJCOwOFiiULVKas8mBH1AdLEZB52YFQqCFFvVRN7OkGGes/t5/Ski3siC6tlwm8YGsQmZFvkEiKlJcrhEEx0IvHduPezZ6cA9wvqYi9zGzkU9lNwNj3CLAPwHei1A==',
            Referer:
              'https://servicewechat.com/wx062c0b1734e359fe/346/page-frame.html',
          },
        },
      )
      .toPromise();
    return res.data;
  }
  @ApiOperation({ summary: '获取分类' })
  @Get('getCates')
  async getCates(): Promise<CateOutput> {
    var res = await this.http
      .get(MonitorController.cateUrl, {
        headers: {
          'Content-Type': 'application/json',
          xcmchid: 9001,
          xctoken:
            'jaq7+UslbzoDGwOzpDjn/fCs7td26AJCOwOFiiULVKas8mBH1AdLEZB52YFQqCFFvVRN7OkGGes/t5/Ski3siC6tlwm8YGsQmZFvkEiKlJcrhEEx0IvHduPezZ6cA9wvqYi9zGzkU9lNwNj3CLAPwHei1A==',
          Referer:
            'https://servicewechat.com/wx062c0b1734e359fe/346/page-frame.html',
        },
      })
      .toPromise();
    return res.data;
  }
}
