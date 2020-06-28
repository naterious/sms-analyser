import { Application } from 'express';

import { IServerDependencies } from './index';
import path from 'path';

export type Router = (app: Application) => void;

export default (methods: IServerDependencies): Router => (app: Application) => {
  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../../../frontend/build'));
  });

  app.post('/api/sms/analyse', methods.analyseSmsMethod);
};