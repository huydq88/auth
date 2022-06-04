import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { appProviders } from './app.provider';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...appProviders],
  exports: [AppService, ...appProviders],
})
export class AppModule {}
