import React from 'react';

export type OnChange = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
) => void;

export type HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => void;

export type SetDefaultState = () => void;

export type ViewSwitcher = () => React.ReactNode;

export interface IState {
  phoneNumber: string,
  country: string,
  operator: string,
  prefix: string,
  message: string,
  formattedMessage: string,
  display: boolean,
  displayError: boolean,
}