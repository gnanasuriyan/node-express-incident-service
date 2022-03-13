import { Request, Response } from "express";

export interface IIncidentController {
    create (req: Request, res: Response) : void;
    delete (req: Request, res: Response) : void;
    get (req: Request, res: Response) : void;
    assign (req: Request, res: Response) : void;
    acknowledge (req: Request, res: Response) : void;
    resolve (req: Request, res: Response) : void;
    list (req: Request, res: Response): void;
}
