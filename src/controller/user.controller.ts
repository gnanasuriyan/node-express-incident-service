import { container, inject, singleton } from "tsyringe";
import { Request, Response } from "express";
import {IUserController} from "./user.controller.type";
import AppLogger from "../utils/logger";

@singleton()
class UserController implements IUserController {
    constructor(
        @inject(AppLogger) public appLogger: AppLogger
    ) {
    }

    login(req: Request, res: Response) : void {
        const userCredentials = req.body;
            
    }
    
    logout(req: Request, res: Response) : void {

    }

    getUserDetails(req: Request, res: Response) : void {

    }
}

container.registerSingleton<UserController>(UserController);

export default UserController;
