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
import { WebResponse } from '../model/web.model';
import { EntryDto } from './dto/dictionary.dto';

@Controller('api/dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getDictionaryList(): Promise<WebResponse<Entry[]>> {
    const data: EntryDto[] = await this.dictionaryService.getAllEntries();
    return { data };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getDictionaryEntryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WebResponse<Entry>> {
    const data = await this.dictionaryService.getEntryById(id);
    return { data };
  }
}
