import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { EntryDto, toEntryDto } from './dto/dictionary.dto';

@Injectable()
export class DictionaryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllEntries(): Promise<EntryDto[]> {
    const result = await this.prismaService.entry.findMany({
      include: {
        aliases: {
          select: {
            name: true,
          },
        },
      },
    });

    return result.map((entry) => toEntryDto(entry));
  }

  async getEntryById(id: number): Promise<EntryDto> {
    const result = await this.prismaService.entry.findFirst({
      where: {
        id,
      },
      include: {
        aliases: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!result) {
      throw new HttpException('Entry not found', HttpStatus.NOT_FOUND);
    }

    return toEntryDto(result);
  }
}
