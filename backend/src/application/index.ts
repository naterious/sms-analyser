import * as analyseSms from './analyseSms';

export default () => {
  return {
    analyseSmsService: analyseSms.analyseSmsService,
  };
};