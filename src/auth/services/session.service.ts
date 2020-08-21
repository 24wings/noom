import { Injectable, Scope, Request, Req, Inject } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/database/repositorys/services/user.service";
import { User } from "src/database/repositorys/entitys/rbac/user.entity";

@Injectable({ scope: Scope.REQUEST })
export class SessionService {
  constructor(@Inject(REQUEST) private request: Request, private userService: UsersService, private jwtService: JwtService) { }


  getHeaders() {
    return this.request.headers;
  }

  getUserOrNull(): Promise<User | null> {
    if (this.request.headers['authorization']) {
      var data = this.jwtService.decode(
        this.request.headers['authorization'].replace(`Bearer `, ''),
        { json: true },
      );
      if (data) {
        if (typeof (data) === 'string') {
          let userToken = JSON.parse(data);
          return this.userService.findOne(userToken.id);

        } else {
          return this.userService.findOne(data.id);
        }


      } else {
        return null;
      }


    } else {

      return null;
    }
  }


}