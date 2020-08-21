import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiQuery,
  ApiParam,
  ApiOperation,
  ApiResponse,
  ApiBasicAuth,
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { UsersLoginOutputDto } from '../dtos/users-login-output.dto';
import { MockWechatService } from 'src/shared/services/mock-wechat.service';
import { UploadProfileInputDto } from '../dtos/upload-profile-input.dto';
import { JwtAuthGuard } from '../../../shared/guard/jwt.guard';
import { AuthService } from '../../../database/repositorys/services/auth.service';
import { UserHomeOutput } from '../dtos/user-home.output';
import { MyAddressOutput } from '../dtos/myaddress.output';
import { UsersService } from 'src/database/repositorys/services/user.service';
@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(
    private wechatService: MockWechatService,
    private authService: AuthService,
    private usersService: UsersService,
  ) { }
  @ApiTags('shop')
  @Get('login')
  @ApiOperation({ summary: '微信用户登录' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 200, description: 'ok', type: UsersLoginOutputDto })
  async login(@Query('code') code: string): Promise<UsersLoginOutputDto> {
    let code2Session = await this.wechatService.code2Session(
      '',
      '',
      code,
      'authorization_code',
    );
    console.log(code);
    var exsitUser = await this.usersService.findByOpenId(code2Session.openid);
    console.log(exsitUser);
    if (!exsitUser) {
      exsitUser = await this.usersService.add({
        openid: code2Session.openid,
        unionid: code2Session.unionid,
        session_key: code2Session.session_key,
        login_time: new Date(),
      });
    }
    var token = await this.authService.login({
      id: exsitUser.id,
      nickname: exsitUser.nickname,
    });
    return {
      result: 'ok',
      tctoken:
        'rs18PpJSRLAm29qQ4n3W5q20KxhsPLtoXvWEfkgj4JUru/TuP9qp9HOOeJojwhmJOZsurS79ZenSXsnUcWnNc57NjLsMR8DKI7VwLPsSkllf9UqenauwCIzKyqHYvBi6efa0NdXfo0QcHUtNc7pTgP0pu5kaoeKYWUR4rtTYVND9f5MvbDWRliYwuwJWgpQpeAXVhtQ+/Zl3m7BwUwFvB78Q',
      mchid: 0,
      jwttoken: token.access_token,
      role: 0,
      unionid: code2Session.unionid,
      user_id: 17064334,
      login_time: Date.now(),
      openid: code2Session.openid,
      head_pic: exsitUser.head_pic,
      nickname: exsitUser.nickname,
      session_key: code2Session.session_key,
      errmsg: 'success',
    };
  }
  @ApiTags('shop')
  @UseGuards(JwtAuthGuard)
  @Post('upload_profile')
  @ApiOperation({ summary: '上传用户基本信息' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async upload_profile(@Body() body: UploadProfileInputDto, @Request() req) {
    console.log(req.user);
    let exsitUser = await this.usersService.findOne(req.user.id);
    exsitUser.head_pic = body.head_pic;
    exsitUser.nickname = body.nickname;
    await this.usersService.updateUser(exsitUser);

    return body;
  }

  @ApiTags('shop')
  @Get('home')
  @ApiOperation({ summary: '获取用户基本信息' })
  @ApiResponse({ description: '用户信息', type: UserHomeOutput, status: 200 })
  async home(): Promise<UserHomeOutput> {
    return require('../data/home.data');
  }

  @ApiOperation({ summary: '获取用户地址' })
  @ApiTags('shop')
  @Get('myaddress')
  @ApiResponse({
    status: 200,
    type: MyAddressOutput,
    description: '获取用户地址',
  })
  myaddress() {
    return require('../data/myaddress.data').data;
  }
}
