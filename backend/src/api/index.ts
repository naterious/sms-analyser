import composeServer from './server';
import composeAnalyseSmsMethod from "./analyseSmsMethod";
import { ILogger } from '../core/contracts';
import { AnalyseSmsService } from '../application/analyseSms';

export interface IApiDependencies {
  logger: ILogger;
  analyseSmsService: AnalyseSmsService;
}

export default (dependencies: IApiDependencies) => {
  const analyseSmsMethod = composeAnalyseSmsMethod(
    dependencies.analyseSmsService,
    dependencies.logger,
  );

  const server = composeServer({
    logger: dependencies.logger,
    analyseSmsMethod,
  });

  return {
    server,
  };
};