import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Response,
  HttpCode,
  ForbiddenException,
} from '@nestjs/common';
import { AuthenticateOutput } from '../dtos/authenticate-output.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthenticateInputDto } from '../dtos/authenticate-input.dto';
import { AuthService } from 'src/database/repositorys/services/auth.service';

@ApiTags('admin')
@ApiBearerAuth()
@Controller('api/TokenAuth')
export class TokenController {
  constructor(
    private authService: AuthService,
  ) { }
  @HttpCode(200)
  @ApiOperation({ summary: '管理员用户登录' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 200, description: 'ok' })
  @Post('Authenticate')
  async Authenticate(
    @Body() authInput: AuthenticateInputDto,
  ): Promise<AuthenticateOutput> {


    var response = new AuthenticateOutput({
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IkU0WUZURlVURFVWUTJITlVRTllWRVFYSzM2QUdLUjVBIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJzdWIiOiIxIiwianRpIjoiZTY1MjU4OTUtZjM2Ni00ZWU5LWIxNDItYzJmNWVkYzdkMmQ5IiwiaWF0IjoxNTk2NDc0NTE4LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiJkYjM1NTE0YS1hZjcwLTRjZTUtYmYwOC05MTQxMWM3MjI4ZWYiLCJ1c2VyX2lkZW50aWZpZXIiOiIxIiwidG9rZW5fdHlwZSI6IjAiLCJuYmYiOjE1OTY0NzQ1MTgsImV4cCI6MTU5NjU2MDkxOCwiaXNzIjoiZVNob3BMaW5rZXIiLCJhdWQiOiJlU2hvcExpbmtlciJ9.aPhC2K4T-eMdt3ZoWtRrirVLUTKTZzJo7RQiM1cqv8Q',
      encryptedAccessToken:
        'wNYmO41/48SHNstaLVXxHCCre29BZQl1NhC6NM3R3rzpXtPQxVzH6jEzA/QhXFN5tu6Fk7pO53uppm1mVXMZgxbyRVz26dnepi/FyB6axBY+6gq1GL+uRQgoiFUCjRN2p8w6LevViwKlHyWZZJZO1DGVSjAi1m2U+og9pkHw9/QR4Nl/DPnoP9JYDMpZ1zxx09u6s0GZ9/Q5Sjk+L0UfcSCbl38X8he5w9UIn/Hvxh7ysM1CiPLsoOwtbiieSRVmrmt0JjnipAn4/K283F8GrGwzwgehWsqefmUnM0ckMwP9ZAdwQxWDhxv0IqNw4tDhwUYs/1SYdYozdNzgByhgNOBPzQDObNLlWc4vV5VMOiZA452lANN7mhgPGxAsR+JJEW7dg6m0rxE+7zz1Bvy6qMXSpAGfYytz+nxk+JyUUZLQRJKksx2nPo0zi3C9c2/XfPi56XWLW66vkn81LdeSc4JYMJVqAL1kelbZwgyqmKNRQuFmwjZGhVfDQYcDHwVfdUMyP5SNiab72Z73fCHZ/h5bOHBBN6hMD9dXt3N+vkjxbpReXFyfv4coJMOnb6fn0A4oPNM+cYzLKJnS8Z5U3wADvOXEUPBI5jloP4mPQ8+A8a2CmQoktM6C4G6jxZbCc5n5oKFL1ywKtGWtFkJRWog9Qsbw3Y3bovQFkO2DerHagGNWL8T4cpPhZBNVfxTa6GtPL4WzHIQv4KxSq7qkeYfFgJ1xwmPK+ro1hMTZvhbYl0NLu6FO6/m+UWPkZtHvcm5nVY/I+Cq/7mZC1NeT7Y7tAp7u3tkWMMOOoUMsF2peaW18retDKIiVxzCqNMDJiDIbw6iT2uMeLQBvs6RigkW4FitfBS87YDYxMuXZyhG7w1xK9P3CuSBtWMYTspZ4usTe9m3BSSXdiJUgckWP0ZuyH3UdLIj2g7RYrBcF8ER2MdGvg1kHhsa6xYA5JcqJQmKn6/t+4SkzpmwjcaMpfL/aEJp+TeVLsNGhkTFpl3FOOu97nj/lVtLbgzA1YD+aP8TfSsTDbmYLuZ2IJKqOOBpHlWlzGptPiJcI5ss+vtk=',
      expireInSeconds: 86400,
      passwordResetCode: null,
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IkU0WUZURlVURFVWUTJITlVRTllWRVFYSzM2QUdLUjVBIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJzdWIiOiIxIiwianRpIjoiNGIyN2M2OTktOTI3Ny00ZThjLTk0NmItYTQzMmVhOTMyNWYxIiwiaWF0IjoxNTk2NDc0NTE4LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiI5YjY5NWJhZC00MDA0LTRhYTctYTU1ZS05Mzc5NWQxNjMxYmMiLCJ1c2VyX2lkZW50aWZpZXIiOiIxIiwidG9rZW5fdHlwZSI6IjEiLCJuYmYiOjE1OTY0NzQ1MTgsImV4cCI6MTYyODAxMDUxOCwiaXNzIjoiZVNob3BMaW5rZXIiLCJhdWQiOiJlU2hvcExpbmtlciJ9.34GwSZJgAn19rJM0zwJ1Yh07HLgJPWYE1ul7qwtQWsU',
      refreshTokenExpireInSeconds: 31536000,
      requiresTwoFactorVerification: false,
      returnUrl: null,
      shouldResetPassword: false,
      twoFactorRememberClientToken: null,
      userId: 1,
    });

    var res = await this.authService.validateUser(
      authInput.userNameOrEmailAddress,
      authInput.password,
    );
    if (res) {
      var code = await this.authService.login({
        id: res.id,
        nickname: res.nickname,
      });
      response.accessToken = code.access_token;
      response.userId = res.id;
      response.encryptedAccessToken = code.access_token;
    } else {
      console.log('login err');
      throw new ForbiddenException("用户名或密码错误");
    }
    console.log(response);
    return response;
  }
}
