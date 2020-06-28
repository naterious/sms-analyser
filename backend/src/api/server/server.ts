import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import { Router } from './router';
import { ILogger } from '../../core/contracts';

export default (
  router: Router,
  logger: ILogger,
) => () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors({ methods: [ 'POST', 'GET', 'DELETE' ]}));
  app.use(express.static(path.join(__dirname, '../../../../frontend/build')));

  router(app);

  logger.info(`Server running at port: ${process.env.APPLICATION_PORT}`);

  return app.listen(process.env.APPLICATION_PORT);
};
