import { Sheet } from "../entities/sheet.js";

export interface ISheetsRepository {
    save(sheet: Sheet): Promise<void>;
}