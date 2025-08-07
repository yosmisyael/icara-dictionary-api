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

export class EntryDto {
  id: number;
  name: string;
  url: string;
  signLang: SignLanguage;
  source: string;
  type: EntryType;
  aliases: string[];
}

export function toEntryDto(entry: EntryWithAliasNames): EntryDto {
  const data = new EntryDto();
  data.id = entry.id;
  data.name = entry.name;
  data.url = entry.url;
  data.signLang = entry.signLang;
  data.source = entry?.source ?? '';
  data.type = entry.type;
  data.aliases = entry.aliases.map((alias) => alias.name);
  return data;
}
