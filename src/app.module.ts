import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryModule } from './dictionary/dictionary.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [DictionaryModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
