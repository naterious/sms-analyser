import React from 'react';

import {Snackbar} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import { IState } from '../types';

export default (state: IState) => {
  if (state.displayError === true) {
    return (
      <>
      <Snackbar message="Here is snackbar message" open={true} autoHideDuration={6000} onClose={() => {}}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
            {state.formattedMessage}
        </Alert>
      </Snackbar>
      </>
    )
  }
  return;
}