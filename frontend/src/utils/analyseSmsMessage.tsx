import linkifyHtml from 'linkifyjs/html';
import { IState } from '../types';

export const analyseSmsMessage = async (state: IState) => {
  const response = await fetch('http://localhost:8080/api/sms/analyse', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      phoneNumber: state.phoneNumber,
      message: state.message,
    })
  });

  const prefixDetails = await response.json();

  if (prefixDetails.code === 422) {
    throw new Error(prefixDetails.message);
  }

  const formattedMessage = linkifyHtml(prefixDetails.message, {
    defaultProtocol: 'https'
  });

  return {
    ...prefixDetails,
    formattedMessage,
  }
}