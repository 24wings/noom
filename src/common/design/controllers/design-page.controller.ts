// import { Controller, Get, Res, Query } from "@nestjs/common";
// import { Response } from 'express';
// import { AppService } from "src/app.service";
// import { StableTableMeta } from "../decorator/tenant";
// import * as tenantList from './tenant.list.json';
// import { tenantCreateForm } from './tenant-page-meta';
// import { TenantCreateForm, TenantQueryBar, TenantList } from "../samples/tenant";
// import { StableFormDecoratorParser, StableQueryBarDecoratorParser, StableTableDecoratorParser } from "dto-ui-types";
// @Controller('api/design')
// export class DesignPageController {
//   constructor() { }

//   @Get()
//   getMeta(@Query('id') id: string): StableTableMeta {
//     switch (id) {
//       case 'tenant':
//         return tenantList as any;
//         break;

//       default:
//         return tenantCreateForm as any;
//         break;
//     }
//   }
//   @Get('getDesignPage')
//   getDesignPage(@Query('name') name: string) {
//     const parser = new StableFormDecoratorParser();
//     const toolbarParser = new StableQueryBarDecoratorParser();
//     const tableParser = new StableTableDecoratorParser();
//     const toolbar = toolbarParser.getQueryBarByTarget(TenantQueryBar);
//     const table = tableParser.getStableTableData(TenantList);
//     const form = parser.getFormByTarget(TenantCreateForm);
//     return { form, toolbar, table };
//   }
//   @Get('getDesignHtml')
//   getDesignHtml(@Query('name') name: string, @Res() res) {
//     const parser = new StableFormDecoratorParser();
//     const toolbarParser = new StableQueryBarDecoratorParser();
//     const tableParser = new StableTableDecoratorParser();
//     const toolbar = toolbarParser.getQueryBarByTarget(TenantQueryBar);
//     const table = tableParser.getStableTableData(TenantList);
//     const form = parser.getFormByTarget(TenantCreateForm);
//     res.render('index.hbs', { form, toolbar, table });

//   }



// }