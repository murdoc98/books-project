import express, { Application } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import * as fs from 'fs';
import morgan from 'morgan';

import swaggerSetup from 'docs/swaggerSetup.doc';
import morganMiddleware from 'middlewares/morgan.middleware';
import routes from 'routes';

export default function createServer(): express.Application {
  dotenv.config();
  if (!fs.existsSync(path.resolve(__dirname, '../../files'))) {
    fs.mkdirSync(path.resolve(__dirname, '../../files'));
  }
  const app: Application = express();
  app.set('PORT', parseInt(<string>process.env.SERVER_PORT, 10) || 4000);
  if (process.env.NODE_ENV === 'prod') app.use(morganMiddleware);
  if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
    app.use(swaggerSetup);
  }
  app.use(express.static('public'));
  app.use(helmet());
  app.use(express.json());
  app.use(
    cors({
      methods: ['GET', 'PUT', 'POST', 'DELETE'],
      origin: '*',
      allowedHeaders: ['Content-Type', 'session'],
      exposedHeaders: ['Content-Type', 'Content-disposition', 'token']
    })
  );
  app.use('/api', routes);
  return app;
}