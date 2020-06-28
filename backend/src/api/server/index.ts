import server from './server';
import router from './router';

import { AnalyseSmsMethod } from '../analyseSmsMethod';
import { ILogger } from '../../core/contracts';

export interface IServerDependencies {
  logger: ILogger;
  analyseSmsMethod: AnalyseSmsMethod;
}

export default (dependencies: IServerDependencies) => {
  const partialRouter = router(dependencies);

  return server(
    partialRouter,
    dependencies.logger,
  );
};