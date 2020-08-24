// import { Form, Field, StableTable, QueryBar } from 'dto-ui-types';
// import { Col } from 'dto-ui-types';


// @Form({ title: '新增租户' })
// export class TenantCreateForm {
//   @Field({ label: 'id' })
//   id: number;
//   @Field({ label: '公司名' })
//   name: string;

// }


// @StableTable({ title: "租户", loadUrl: '/api/services/app/Tenant/GetTenants' })
// export class TenantList {
//   @Col({ title: 'id', type: 'text' })
//   id: number;
//   @Col({ title: '公司姓名', type: 'text' })
//   name: string;
//   @Col({ title: '租户姓名', type: 'text' })
//   tenancyName: string;
//   @Col({ title: '激活', type: 'yn' })
//   isActive: boolean;
//   @Col({ title: '过渡期', type: 'yn' })
//   isInTrialPeriod: boolean;
//   @Col({ title: '是否随机密码', type: 'yn' })
//   isRandomPassword: boolean;
//   @Col({ title: '管理员密码', type: 'text' })
//   adminPassword: string;
//   subscriptionEndDateUtc: Date;
//   editionDisplayName: string;
//   creationTime: Date;
//   connectionString: string;
//   editionId?: string;
// }

// @QueryBar<TenantQueryBar>({ loadUrl: '' })
// export class TenantQueryBar {
//   @Field({ label: '公司名称/公司代码' })
//   Filter: string;
//   @Field({
//     label: '版本',
//     loadOptionsUrl: 'Request URL: https://shop.fotaboss.com/api/services/app/Edition/GetEditionComboboxItems?selectedEditionId=0&addAllItem=true&onlyFreeItems=false',
//     loadOptionsKey: 'displayText',
//     loadOptionsValue: 'value',
//     control: 'text'
//   })
//   EditionId: number;
//   @Field({ label: '订阅开始时间', control: 'date' })
//   SubscriptionEndDateStart: Date;
//   @Field({ label: '订阅结束时间', control: 'date' })
//   SubscriptionEndDateEnd: Date;
//   @Field({ label: '创建开始时间', control: 'date' })
//   CreationDateStart: Date;
//   @Field({ label: '创建结束时间', control: 'date' })
//   CreationDateEnd: Date;
// }