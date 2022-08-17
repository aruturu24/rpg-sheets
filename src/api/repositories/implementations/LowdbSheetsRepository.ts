import { Sheet } from "../../entities/sheet.js";
import { ISheetsRepository } from "../ISheetsRepository.js";

import { dirname, join } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

type Sheets = {
    sheets: Sheet[]
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "..", "..", "databases", "sheets.json");
const adapter = new JSONFile<Sheets>(file);
const db = new Low(adapter);

export class LowdbSheetsRepository implements ISheetsRepository {
    async save(sheet: Sheet): Promise<void> {
        if (db.data === null) {
            db.data = {sheets: []};
            await db.write();
        }
        db.data.sheets.push(sheet);
        await db.write();
   }
}