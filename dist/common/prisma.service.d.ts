import { OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from 'generated/prisma';
export declare class PrismaService extends PrismaClient<Prisma.PrismaClientOptions, string> implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
}
