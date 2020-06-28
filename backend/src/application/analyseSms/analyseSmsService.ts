import {readFileSync} from 'fs';
import * as r from 'ramda';

import { IAnalysedSms, ISampleData } from './interfaces';
import {findLongestMatchingPrefix} from "../../domain";
import { ProcessingError } from '../../core/errors/errorsClass';

export type AnalyseSmsService = (
  phoneNumber: string,
  message: string,
) => Promise<IAnalysedSms>;

export const analyseSmsService: AnalyseSmsService = async (phoneNumber, message) => {
  const sampleData = JSON.parse(readFileSync('sampledata.json', 'utf-8'));

  const longestMatchingPrefix = findLongestMatchingPrefix(phoneNumber, sampleData);

  if (longestMatchingPrefix == null) {
    throw new ProcessingError("Unable to process, please enter another number");
  }

  const prefixInformation = r.head(
    r.filter(
      r.propEq("prefix", longestMatchingPrefix),
      sampleData
    )
  ) as ISampleData;

  return {
    country: prefixInformation.country_name,
    operator: prefixInformation.operator,
    prefix: prefixInformation.prefix,
    message,
  };
};
