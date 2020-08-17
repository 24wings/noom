import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels()
export class AuthenticateOutput {
  @ApiProperty({ description: '身份认证token' })
  accessToken: string;
  @ApiProperty({ description: '加密的身份认证' })
  encryptedAccessToken: string;
  @ApiProperty({ description: '过期时间/秒' })
  expireInSeconds: number; //86400
  @ApiProperty({ description: '密码重置' })
  passwordResetCode: string;
  refreshToken: string;
  refreshTokenExpireInSeconds: number; //31536000
  requiresTwoFactorVerification: boolean; //false
  returnUrl: string;
  shouldResetPassword: boolean;
  twoFactorRememberClientToken: string;
  userId: number;
  constructor(opt: {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    passwordResetCode: string;
    refreshToken: string;
    refreshTokenExpireInSeconds: number;
    requiresTwoFactorVerification: boolean;
    returnUrl: string;
    shouldResetPassword: boolean;
    twoFactorRememberClientToken: string;
    userId: number;
  }) {
    this.accessToken = opt.accessToken;
    this.encryptedAccessToken = opt.encryptedAccessToken;
    this.expireInSeconds = opt.expireInSeconds;
    this.passwordResetCode = opt.passwordResetCode;
    this.refreshToken = opt.refreshToken;
    this.refreshTokenExpireInSeconds = opt.refreshTokenExpireInSeconds;
    this.requiresTwoFactorVerification = opt.requiresTwoFactorVerification;
    this.returnUrl = opt.returnUrl;
    this.shouldResetPassword = opt.shouldResetPassword;
    this.twoFactorRememberClientToken = opt.twoFactorRememberClientToken;
    this.userId = opt.userId;
  }
}
