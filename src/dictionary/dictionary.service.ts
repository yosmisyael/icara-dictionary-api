import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Entry } from 'generated/prisma';

@Injectable()
export class DictionaryService {
  constructor(private readonly prismaService: PrismaService) {}

  getAllEntries(): Promise<Entry[]> {
    return this.prismaService.entry.findMany({
      include: {
        aliases: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getEntryById(id: number): Promise<Entry> {
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

    return result;
  }
}
