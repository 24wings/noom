import { Controller, Get, Res, Query } from "@nestjs/common";
import { Response } from 'express';
import { AppService } from "src/app.service";
import { StableTableMeta } from "../decorator/tenant";
import * as tenantList from './tenant.list.json';
import * as tenantCreateForm from './tenant-create-form.json';
@Controller('api/design')
export class DesignPageController {
  constructor() { }

  @Get()
  getMeta(@Query('id') id: string): StableTableMeta {
    switch (id) {
      case 'tenant':
        return tenantList as any;
        break;

      default:
        return tenantCreateForm as any;
        break;
    }
  }



}