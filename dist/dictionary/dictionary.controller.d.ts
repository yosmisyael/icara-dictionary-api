import { DictionaryService } from './dictionary.service';
import { Entry } from 'generated/prisma';
import { WebResponse } from '../model/web.model';
export declare class DictionaryController {
    private readonly dictionaryService;
    constructor(dictionaryService: DictionaryService);
    getDictionaryList(): Promise<WebResponse<Entry[]>>;
    getDictionaryEntryById(id: number): Promise<WebResponse<Entry>>;
}
