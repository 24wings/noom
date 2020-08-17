import { CodeToSession } from '../../modules/common/dtos/code2-to-session';

export class IWechatService {
  getAccessToken(
    grant_type: 'client_credential',
    appid: string,
    secret: string,
  ): Promise<string> {
    return null;
  }
  code2Session(
    appid: string,
    secret: string,
    js_code: string,
    grant_type: 'authorization_code',
  ): Promise<CodeToSession> {
    return null;
  }
}
