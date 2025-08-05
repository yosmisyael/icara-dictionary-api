import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { Entry } from 'generated/prisma';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getDictionaryList(): Promise<Entry[]> {
    return this.dictionaryService.getAllEntries();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getDictionaryEntryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Entry> {
    return this.dictionaryService.getEntryById(id);
  }
}
