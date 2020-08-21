import { Controller, Get } from "@nestjs/common";

@Controller(`api/services/app/HostSettings`)
export class SettingController {
  @Get(`GetAllSettings`)
  async GetAllSettings() {
    return { "result": { "general": { "timezone": "", "timezoneForComparison": "UTC" }, "userManagement": { "isEmailConfirmationRequiredForLogin": false, "smsVerificationEnabled": false, "isCookieConsentEnabled": false, "isQuickThemeSelectEnabled": false, "useCaptchaOnLogin": false, "sessionTimeOutSettings": { "isEnabled": false, "timeOutSecond": 30, "showTimeOutNotificationSecond": 30 } }, "email": { "defaultFromAddress": "admin@mydomain.com", "defaultFromDisplayName": "mydomain.com mailer", "smtpHost": "127.0.0.1", "smtpPort": 25, "smtpUserName": "", "smtpPassword": null, "smtpDomain": "", "smtpEnableSsl": false, "smtpUseDefaultCredentials": true }, "tenantManagement": { "allowSelfRegistration": true, "isNewRegisteredTenantActiveByDefault": false, "useCaptchaOnRegistration": true, "defaultEditionId": null }, "security": { "allowOneConcurrentLoginPerUser": false, "useDefaultPasswordComplexitySettings": true, "passwordComplexity": { "requireDigit": false, "requireLowercase": false, "requireNonAlphanumeric": false, "requireUppercase": false, "requiredLength": 3 }, "defaultPasswordComplexity": { "requireDigit": false, "requireLowercase": false, "requireNonAlphanumeric": false, "requireUppercase": false, "requiredLength": 3 }, "userLockOut": { "isEnabled": true, "maxFailedAccessAttemptsBeforeLockout": 5, "defaultAccountLockoutSeconds": 300 }, "twoFactorLogin": { "isEnabledForApplication": false, "isEnabled": false, "isEmailProviderEnabled": true, "isSmsProviderEnabled": true, "isRememberBrowserEnabled": true, "isGoogleAuthenticatorEnabled": false } }, "billing": { "legalName": "", "address": "" }, "otherSettings": { "isQuickThemeSelectEnabled": false }, "orderingSettings": { "defaultProfit": 0 } }, "targetUrl": null, "success": true, "error": null, "unAuthorizedRequest": false, "__abp": true }
  }
}