"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryDto = void 0;
exports.toEntryDto = toEntryDto;
class EntryDto {
}
exports.EntryDto = EntryDto;
function toEntryDto(entry) {
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
//# sourceMappingURL=dictionary.dto.js.map