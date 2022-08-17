import { LowdbSheetsRepository } from "../../repositories/implementations/LowdbSheetsRepository.js";
import { CreateSheetController } from "./CreateSheetController.js";
import { CreateSheetUseCase } from "./CreateSheetUseCase.js";

const lowdbSheetsRepository = new LowdbSheetsRepository();

const createSheetUseCase = new CreateSheetUseCase(lowdbSheetsRepository);
const createSheetController = new CreateSheetController(createSheetUseCase);

export { createSheetUseCase, createSheetController}