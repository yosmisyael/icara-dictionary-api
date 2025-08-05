import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from 'generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, string>
  implements OnModuleInit
{
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }
}
