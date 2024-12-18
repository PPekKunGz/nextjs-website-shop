import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This All Made by. PPekKunGzDev!';
  }
}
