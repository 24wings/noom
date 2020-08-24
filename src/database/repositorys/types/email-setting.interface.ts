export interface PasswordComplexitySetting {
  requireDigit: boolean
  requireLowercase: boolean
  requireNonAlphanumeric: boolean
  requireUppercase: boolean
  requiredLength: number;
}