import { PrismaService } from '../common/prisma.service';
import { EntryDto } from './dto/dictionary.dto';
export declare class DictionaryService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAllEntries(): Promise<EntryDto[]>;
    getEntryById(id: number): Promise<EntryDto>;
}
