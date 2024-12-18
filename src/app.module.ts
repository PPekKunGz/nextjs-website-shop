import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload-cdn'),
      serveRoot: '/nest-multer',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}