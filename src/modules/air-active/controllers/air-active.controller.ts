import { Controller, Post, Body, HttpService } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import * as cheerio from 'cheerio';

@ApiTags('air-active')
@Controller('api/air-active')
export class AirActiveController {
  constructor(private httpClient: HttpService) {}

  @ApiBody({ type: String, isArray: true })
  @Post('batCheck')
  public async batCheck(@Body() imeiList: string[]) {
    const httpClient = new HttpService();
    let html = (await httpClient
      .get(
        `https://ccpce-cn.consumer.huawei.com/ccpcmd/services/dispatch/secured/CCPC/EN/ccpc/queryPicVerifyCode/1000`,
      )
      .toPromise()
      .then(res => res.data)) as string;
    const data = JSON.parse(html.replace('(', '').replace(')', '')) as any;
    const picUrl = data.responseData.picUrl;
    const picBase64 = await httpClient
      .get(picUrl, { responseType: 'arraybuffer' })
      .toPromise()
      .then(rtn => rtn.data.toString('base64'));
    const imageResult = await httpClient
      .post('http://localhost:7004', `base64=${picBase64}`)
      .toPromise()
      .then(rtn => rtn.data);
    console.log(data);
    const postData = {
      sn: imeiList[0],
      countryCode: 'CN',
      langCode: 'zh-cn',
      sessionId: data.responseData.sessionId,
      verifyCode: imageResult,
      channelCode: 'WEBSITE',
      country: 'CN',
      language: 'zh-cn',
      siteCode: 'zh_CN',
    };

    const result = await httpClient
      .post(
        `https://ccpce-cn.consumer.huawei.com/ccpcmd/services/dispatch/secured/CCPC/EN/ccps/getDeviceV2/1000`,
        postData,
      )
      .toPromise()
      .then(rtn => rtn.data);
    console.log(result);
    return result;
  }
}
