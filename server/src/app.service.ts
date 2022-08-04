import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRedirectLink(slug): string {
    return slug;
  }
}
