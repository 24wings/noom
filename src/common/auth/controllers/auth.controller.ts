import { Get, Controller } from "@nestjs/common";
import { SessionService } from "../services/session.service";



@Controller("api/auth")
export class AuthController {
  constructor(private sessionService: SessionService) { }

  @Get("gets")
  gets() {
    return this.sessionService.getHeaders();
  }
}