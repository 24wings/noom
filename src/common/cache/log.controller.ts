import { Controller, Get } from "@nestjs/common";

@Controller('api/services/app/WebLog')
export class LogController {
  @Get(`GetLatestWebLogs`)
  GetLatestWebLogs() {
    return {
      "result": {
        latestWebLogLines:
          [`INFO  2020-08-21 19:37:43,062 [142  ] Microsoft.AspNetCore.Hosting.Diagnostics - Request starting HTTP/1.0 GET http://eshop_server_1/api/services/app/AuditLog/GetAuditLogs?StartDate=2020-08-21T00%3A00%3A00%2B08%3A00&EndDate=2020-08-21T23%3A59%3A59%2B08%3A00&MaxResultCount=10&SkipCount=0  
 `],

      },
      success: true,
      targetUrl: null,
      unAuthorizedRequest: false,
      __abp: true
    }
  }

}