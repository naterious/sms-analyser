import {expect} from 'chai';

import {findLongestMatchingPrefix} from '../../../src/domain/findLongestMatchingPrefix';
import { phoneNumber, sampleData, longestPrefix, phoneNumberShort, shortestPrefix, nonMatchingNumber, nonMatchingPrefixNumber } from '../fixtures';

describe('findLongestMatchingPrefix', () => {
  describe('When the provided number contains the longest prefix', () => {
    it('returns the longest matching prefix', () => {
      const result = findLongestMatchingPrefix(phoneNumber, sampleData);
      expect(result).to.eql(longestPrefix);
    });
  });

  describe('When the provided number contains the shortest prefix', () => {
    it('returns the longest matching prefix', () => {
      const result = findLongestMatchingPrefix(phoneNumberShort, sampleData);
      expect(result).to.eql(shortestPrefix);
    });
  });

  describe('When the provided number does not contain a matching prefix', () => {
    it('returns null', () => {
      const result = findLongestMatchingPrefix(nonMatchingNumber, sampleData);
      expect(result).to.eql(null);
    });
  });

  describe('When the provided contains a matching prefix digits but it is not a prefix', () => {
    it('returns null', () => {
      const result = findLongestMatchingPrefix(nonMatchingPrefixNumber, sampleData);
      expect(result).to.eql(null);
    });
  });
})