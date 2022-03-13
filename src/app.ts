import {container, inject, singleton} from "tsyringe";
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import  AppLogger from "./utils/logger";
import IncidentRouter from "./routes/incident.router";
import UserRouter from "./routes/user.router";

@singleton()
class App {
    private app: express.Application;
    constructor(
        @inject(AppLogger) private appLogger: AppLogger,
        @inject(IncidentRouter) private incidentRouter: IncidentRouter,
        @inject(UserRouter) private userRouter: UserRouter
    ) {
        this.app = express();
        this.config();
    }

    // express app configuration
    private config() {
        // cors configuration
        this.app.use(cors());
        
        // body parser configuration
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        
        // application router configuration
        this.app.get('/', (req, res) => {
            res.send({ping: 'pong'});
        });
        this.app.use('/v1/incidents', this.incidentRouter.init());
        this.app.use('/v1/users', this.userRouter.init());
    }

    public start() {
        const PORT = process.env.PORT || 3000;
        this.app.listen(PORT, () => {
            this.appLogger.instance.info(`BOOT: service is running and listening on port ${PORT}`);
        })
    }
}

container.registerSingleton<App>(App);

export default App;
