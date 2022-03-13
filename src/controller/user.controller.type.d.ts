import { Request, Response } from "express";

export interface IUserController {
    login (req: Request, res: Response) : void;
    logout (req: Request, res: Response) : void;
    getUserDetails (req: Request, res: Response) : void;
}
