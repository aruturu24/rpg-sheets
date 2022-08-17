import { Router } from "express";
import { createSheetController } from "./useCases/createSheet/index.js";

const router = Router();

router.post('/', (req, res) => {
    return createSheetController.handle(req, res);
});

export {router}