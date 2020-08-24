export class CreateTenantInput {
  adminEmailAddress: string;
  adminPassword: string;
  editionId: string;
  isActive: boolean;
  isInTrialPeriod: boolean;
  name: string;
  sendActivationEmail: boolean;
  shouldChangePasswordOnNextLogin: boolean;
  tenancyName: string;
  useRandomPassword: boolean;
}