import * as r from 'ramda';
import { ISampleData } from '../application/analyseSms/interfaces';

const getLongestElement = (arr: string[]) => arr.reduce((a, b) => { return a.length > b.length ? a : b; });

export type FindLongestMatchingPrefix = (
  phoneNumber: string,
  sampleData: ISampleData[],
) => number;

export const findLongestMatchingPrefix: FindLongestMatchingPrefix = (
  phoneNumber,
  sampleData,
) => {
  let prefixesToCheck: string[] = [];
  
  r.map((each: ISampleData) => {
    const prefix = r.toString(each.prefix);
   
    if (phoneNumber.includes(prefix)) {
      
      const prefixLength = prefix.length;
      
      const prefixInNumber = phoneNumber.substring(0, prefixLength);
      
      if (r.equals(prefix, prefixInNumber)) {
        return prefixesToCheck.push(prefix)
      }
    }
  })(sampleData);

  return r.ifElse(
    r.isEmpty,
    () => null,
    () => parseInt(getLongestElement(prefixesToCheck), 10)
  )(prefixesToCheck);
}

