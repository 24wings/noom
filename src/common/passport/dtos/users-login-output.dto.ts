import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class UsersLoginOutputDto {
  @ApiProperty({ description: '结果，成功为ok' })
  result: string;
  @ApiProperty({ description: '用户token,用于请求头tctoken携带鉴权' })
  tctoken: string;
  @ApiProperty({ description: '商户id' })
  mchid: number;
  @ApiProperty({ description: '角色编号' })
  role: number;
  @ApiProperty({ description: 'unionId' })
  unionid: string;
  @ApiProperty({ description: '用户id' })
  user_id: number;
  @ApiProperty({ description: '登录时间' })
  login_time: number;
  @ApiProperty({ description: 'openid' })
  openid: string;
  @ApiProperty({ description: '头像' })
  head_pic: string;
  @ApiProperty({ description: '昵称' })
  nickname: string;
  @ApiProperty({ description: '微信会话key' })
  session_key: string;
  @ApiProperty({ description: '错误信息' })
  errmsg: string;

  jwttoken?: string;
}
