import { Router } from "express";
import { container, inject, singleton } from "tsyringe";
import { IAppRouter } from "./router.type";
import AppLogger from "../utils/logger";
import UserController from "../controller/user.controller";

@singleton()
class UserRouter implements IAppRouter{
    constructor(
        @inject(UserController) public controller: UserController,
        @inject(AppLogger) public appLogger: AppLogger,
    ) {}
    public init(): Router {
        this.appLogger.instance.info('BOOT: started initializing user router');
        const router = Router();
        router.post('/login', (req, res) => this.controller.login(req, res));
        router.post('/logout', (req, res) => this.controller.logout(req, res));
        router.get('/details/:key', (req, res) => this.controller.getUserDetails(req, res));
        this.appLogger.instance.info('BOOT: completed initializing user router');
        return router;
    }
}

container.registerSingleton<UserRouter>(UserRouter);
export default UserRouter;
