import { Response, Request } from 'express';

import { AnalyseSmsService } from '../application/analyseSms/analyseSmsService';
import { ILogger } from '../core/contracts';

export type AnalyseSmsMethod = (
  req: Request,
  res: Response,
) => Promise<Response>;

export default (
  analyseSmsService: AnalyseSmsService,
  logger: ILogger,
): AnalyseSmsMethod => async(req, res) => {
  const {phoneNumber, message} = req.body;

  try {
    const result = await analyseSmsService(phoneNumber, message);

    return res.status(200).send(result);
  } catch (err) {
    logger.error(`${err.name} - ${err.message}`);

    let errorCode = err.status;
    if (errorCode == null) {
      errorCode = 500;
    }
    
    return res.status(errorCode).send({
      code: err.status,
      message: err.message,
    })
  }
};
