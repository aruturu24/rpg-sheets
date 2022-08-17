import { Sheet } from "../../entities/sheet.js";
import { ISheetsRepository } from "../../repositories/ISheetsRepository.js"
import { ICreateSheetRequestDTO } from "./CreateSheetDTO.js";

export class CreateSheetUseCase {
    
    constructor(private sheetsRepository: ISheetsRepository) {}

    async execute(data: ICreateSheetRequestDTO) {
        const sheet = new Sheet(data);

        await this.sheetsRepository.save(sheet);
    }
}