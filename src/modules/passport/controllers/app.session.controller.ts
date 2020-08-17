import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { logind } from '../../common/dtos/logind.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from '../../../shared/services/users.services';
import { JwtService } from '@nestjs/jwt';

@ApiTags('admin')
@ApiBearerAuth()
@Controller('api/services/app/Session')
export class AppSessionController {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  @Get('GetCurrentLoginInformations')
  public GetCurrentLoginInformations(@Request() req: any) {
    console.log('loginUser', req.user, req.headers.authorization);
    if (req.headers.authorization) {
      var data = this.jwtService.decode(
        req.headers.authorization.replace(`Bearer `, ''),
        { json: true },
      );
      if (data) {
        return logind;
      }
    }
    return {
      result: {
        user: null,
        tenant: null,
        application: {
          version: '8.1.0.0',
          releaseDate: '2020-06-25T23:33:23+08:00',
          currency: 'USD',
          currencySign: '$',
          allowTenantsToChangeEmailSettings: false,
          features: {},
        },
        theme: {
          baseSettings: {
            theme: 'default',
            layout: { layoutType: 'fluid' },
            header: {
              desktopFixedHeader: true,
              mobileFixedHeader: false,
              headerSkin: 'light',
              minimizeDesktopHeaderType: null,
              headerMenuArrows: false,
            },
            subHeader: { fixedSubHeader: true, subHeaderStyle: 'solid' },
            menu: {
              position: 'left',
              asideSkin: 'light',
              fixedAside: true,
              allowAsideMinimizing: true,
              defaultMinimizedAside: false,
              submenuToggle: 'false',
              searchActive: false,
            },
            footer: { fixedFooter: false },
          },
          isLeftMenuUsed: true,
          isTopMenuUsed: false,
          isTabMenuUsed: false,
          allowMenuScroll: true,
        },
      },
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    };
  }
}
