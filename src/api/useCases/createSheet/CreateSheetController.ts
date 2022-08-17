import { Request, Response } from "express";
import { CreateSheetUseCase } from "./createSheetUseCase.js";

export class CreateSheetController {
    constructor(private createSheetUseCase: CreateSheetUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        try {
            await this.createSheetUseCase.execute({
                name
            });

            return res.status(201).send();
        }catch(err: unknown) {
            if (err instanceof Error) {
                return res.status(400).json({
                    message: err.message
                });
            }
            return res.status(400).json({message: "Unexpected error."});
        }
    }
}