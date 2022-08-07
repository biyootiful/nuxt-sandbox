import {
  Controller,
  Get,
  Redirect,
  Param,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get(':slug')
  @Redirect('https://localhost:3000', 302)
  async getRedirectLink(@Param('slug') slug: string): Promise<{ url: string }> {
    const link = await this.prismaService.link.findFirst({
      where: { slug: String(slug)}
    })
    
    // to redirect, return,
    // {
    //   "url": string,
    //   "statusCode": number
    // }
    // https://docs.nestjs.com/controllers#redirection

    return { url: link.url };
  }
}
