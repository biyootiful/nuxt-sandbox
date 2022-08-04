import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':slug')
  getRedirectLink(@Param() params): string {
    return this.appService.getRedirectLink(params.slug);
  }
}
