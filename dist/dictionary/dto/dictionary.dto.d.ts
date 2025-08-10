import { SignLanguage, EntryType, Prisma } from 'generated/prisma';
type EntryWithAliasNames = Prisma.EntryGetPayload<{
    include: {
        aliases: {
            select: {
                name: true;
            };
        };
    };
}>;
export declare class EntryDto {
    id: number;
    name: string;
    url: string;
    signLang: SignLanguage;
    source: string;
    type: EntryType;
    aliases: string[];
}
export declare function toEntryDto(entry: EntryWithAliasNames): EntryDto;
export {};
