import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class AuthenticateInputDto {
  @ApiProperty({ description: '用户名' })
  userNameOrEmailAddress: string;
  @ApiProperty({ description: '密码' })
  password: string;
  @ApiProperty({ description: '记住我' })
  rememberClient?: boolean;
  @ApiProperty({ description: '双端token' })
  twoFactorRememberClientToken?: string;
  @ApiProperty({ description: '单点登录' })
  singleSignIn?: boolean;
  @ApiProperty({ description: '登录成功返回地址' })
  returnUrl?: string;
}
