import dotenv from 'dotenv'
dotenv.config({path: process.env.NODE_ENV});
import "reflect-metadata";
import {container} from "tsyringe";
import App from './src/app';

const app = container.resolve(App);
app.start();
