import { container, inject, singleton } from "tsyringe";
import { Request, Response } from "express";
import { Incident, IncidentList, IncidentCreate } from "../model/incident";
import {IIncidentController} from "./incident.controller.type";
import AppLogger from "../utils/logger";

@singleton()
class IncidentController implements IIncidentController {
    public _incidents: Array<Incident>;
    constructor(
        @inject(AppLogger) public appLogger: AppLogger
    ) {
        this._incidents = [];
    }

    public create(req: Request, res: Response) {
        this.appLogger.instance.info('creating new incident', req.body);
        const incidentCreate:IncidentCreate = req.body;
        const incident: Incident = {
            uuid: `${this._incidents.length + 1}`,
             title: incidentCreate.title,
            info: incidentCreate.info,
            createdAt: new Date(),
            assignedTo: null,
        }
        this._incidents.push(incident)
        this.appLogger.instance.info('successfuylly created an incident', incident);
        res.send(incident);
    }

    delete(req: Request, res: Response): void{
    }

    get(req: Request, res: Response): void {

    }

    assign(req: Request, res: Response): void{
    }

    acknowledge(req: Request, res: Response): void{
    }
    
    resolve(req: Request, res: Response): void{
    }

    list(req: Request, res: Response): void {
        this.appLogger.instance.info('loading list of incidents');
        const list =  <IncidentList> {
            pagination: {
                total: this._incidents.length,
                offset: 0,
                limit: this._incidents.length === 0 ? 0 : - 1, 
            },
            data: this._incidents
        }
        this.appLogger.instance.info('incidents are loaded successfully');
        res.send(list)
    }
}

container.registerSingleton<IncidentController>(IncidentController);

export default IncidentController;
