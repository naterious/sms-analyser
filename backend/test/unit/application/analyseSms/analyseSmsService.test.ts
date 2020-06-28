import {expect} from 'chai';
import sinon from 'sinon';
import * as fs from 'fs';

import * as domain from "../../../../src/domain";
import {analyseSmsService} from '../../../../src/application/analyseSms';
import { phoneNumber, message, longestPrefix, sampleData } from '../../fixtures';
import { ProcessingError } from '../../../../src/core/errors/errorsClass';

describe('analyseSmsService', () => {
  let findLongestMatchingPrefix: any;
  let readFileSync: any;

  beforeEach(() => {
    findLongestMatchingPrefix = sinon.stub(domain, 'findLongestMatchingPrefix');
    readFileSync = sinon.stub(fs, 'readFileSync');
  });

  afterEach(() => sinon.restore());

  describe('When the provided number contains a matching prefix', () => {
    it('returns the record for the longest matching prefix', async () => {
      readFileSync.returns(JSON.stringify(sampleData));
      findLongestMatchingPrefix.returns(longestPrefix);

      const result = await analyseSmsService(phoneNumber, message);

      expect(result).to.have.keys(
        'country',
        'operator',
        'prefix',
        'message'
      );
    });
  });

  describe('When the provided number does not contain a matching prefix', () => {
    it('returns a `ProcessingError` error', async () => {
      readFileSync.returns(JSON.stringify(sampleData));
      findLongestMatchingPrefix.returns(null);

      try {
        await analyseSmsService(phoneNumber, message);
      } catch (e) {
        expect(e).to.be.instanceOf(ProcessingError)
      }
    });
  });

})