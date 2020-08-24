// import { StableForm } from "../decorator/stable-form";
// import { CreateTenantInput } from "src/common/tenant/dtos/input/create-tenant.input";
// export let tenantCreateForm: StableForm<CreateTenantInput> = {
//   formItems: [
//     { field: 'name', label: '公司名称', control: 'text', required: true },
//     { field: 'tenancyName', label: '公司名称', control: 'text', required: true },
//     { field: 'adminEmailAddress', label: '管理员邮箱', control: 'text', required: true },
//     { field: 'useRandomPassword', label: '使用随机密码', control: 'checkbox', required: true },
//     {
//       field: 'adminPassword', label: '管理员密码', control: 'text', iif: [{
//         'useRandomPassword': true
//       }]
//     },
//     { field: 'isActive', label: 'isActive', control: 'checkbox' }
//   ],
//   "title": "编辑"
// }