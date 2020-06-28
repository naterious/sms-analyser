export interface IAnalysedSms {
  country: string;
  operator: string;
  prefix: number;
  message: string;
}

export interface ISampleData {
  prefix: number;
  operator: string;
  country_code: number;
  country_name: string;
}