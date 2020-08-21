import { Tenant } from "src/database/repositorys/entitys/rbac/tenant.entity";


export class GetTenantResult {
  items: Tenant[];
  totalCount: number;
}


export class GetTenantOutput {
  result: GetTenantResult;
}