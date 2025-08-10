"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
const dictionary_dto_1 = require("./dto/dictionary.dto");
let DictionaryService = class DictionaryService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAllEntries() {
        const result = await this.prismaService.entry.findMany({
            include: {
                aliases: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return result.map((entry) => (0, dictionary_dto_1.toEntryDto)(entry));
    }
    async getEntryById(id) {
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
            throw new common_1.HttpException('Entry not found', common_1.HttpStatus.NOT_FOUND);
        }
        return (0, dictionary_dto_1.toEntryDto)(result);
    }
};
exports.DictionaryService = DictionaryService;
exports.DictionaryService = DictionaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DictionaryService);
//# sourceMappingURL=dictionary.service.js.map