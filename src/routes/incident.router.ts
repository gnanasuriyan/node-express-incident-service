import { Router } from "express";
import IncidentController from "../controller/incident.controller";
import { container, inject, singleton } from "tsyringe";
import { IAppRouter } from "./router.type";
import AppLogger from "../utils/logger";

@singleton()
class IncidentRouter implements IAppRouter{
    constructor(
        @inject(IncidentController) public controller: IncidentController,
        @inject(AppLogger) public appLogger: AppLogger,
    ) {}
    public init(): Router {
        this.appLogger.instance.info('BOOT: started initializing incident router');
        const router = Router();
        router.post('/create', (req, res) => this.controller.create(req, res));
        router.delete('/delete/:id', (req, res) => this.controller.delete(req, res));
        router.get('/get/:id', (req, res) => this.controller.get(req, res));
        router.post('/assign/:id', (req, res) => this.controller.assign(req, res));
        router.post('/resolve/:id', (req, res) => this.controller.resolve(req, res));
        router.get('/list', (req, res) => this.controller.list(req, res));
        this.appLogger.instance.info('BOOT: completed initializing incident router');
        return router;
    }
}

container.registerSingleton<IncidentRouter>(IncidentRouter);
export default IncidentRouter;
