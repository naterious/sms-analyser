import React from 'react';
import {TextField, Button} from '@material-ui/core';
import { OnChange, HandleSubmit } from '../types';

export default (props: {
  onChange: OnChange,
  handleSubmit: HandleSubmit,
}) => {
  return (
    <>
    <form className="formWrapper" autoComplete="off" onSubmit={props.handleSubmit}>
      <div className="formContent">
        <p>Please enter phone number</p>
        <div>
          <TextField
            type="number"
            id="phoneNumber"
            label="Phone number"
            placeholder="Phone number"
            rowsMax={4}
            onChange={props.onChange}
            variant="outlined"
            className="inputFieldsPhone"
            required
            color="primary"
          />
        </div>
        <br></br>
        <p>Please enter message</p>
        <div>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            onChange={props.onChange}
            variant="outlined"
            className="inputFieldsMessage"
            required
            color="primary"
          />
        </div>
      </div>
      <Button variant="outlined" color="primary" type="submit" size="large">Submit</Button>
    </form>
    </>
  );
}