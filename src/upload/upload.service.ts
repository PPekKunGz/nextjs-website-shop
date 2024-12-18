import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class UploadService {
  getUploadedFilePath(filename: string): string {
    return join('/cdn/uploads/', filename); // เส้นทางลิงก์ที่คืนกลับไป
  }
}