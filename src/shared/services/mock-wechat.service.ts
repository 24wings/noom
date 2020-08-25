import { Injectable } from '@nestjs/common';
import { IWechatService } from './i-wechat.service';
import { CodeToSession } from '../../common/common/dtos/code2-to-session';

@Injectable()
export class MockWechatService implements IWechatService {
  code2Session(
    appid: string,
    secret: string,
    js_code: string,
    grant_type: 'authorization_code',
  ): Promise<CodeToSession> {
    return new Promise<CodeToSession>(res => {
      res({
        session_key: 'rmdbdNeJk7NGiSFWk+kVZg==',
        openid: 'oWNXS5H6Bm9-VXhthJwDdCsZ2j00',
        unionid: '',
        errcode: 0,
        errmsg: 'success',
      });
    });
  }
  getAccessToken(
    grant_type: 'client_credential',
    appid: string,
    secret: string,
  ): Promise<string> {
    return new Promise(res => res('123'));
  }
}
