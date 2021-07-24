import { Injectable } from '@nestjs/common';
import { IAppService } from '@/interfaces/IAppService';

@Injectable()
export class AppService implements IAppService {
  healthCheck(): boolean {
    return true;
  }
}
