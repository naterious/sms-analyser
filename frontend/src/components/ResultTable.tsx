import React from 'react';
import ReactHtmlParser from 'html-react-parser';
import {Button} from '@material-ui/core';

import { SetDefaultState, IState } from '../types';

export default (props: {
  setDefaultState: SetDefaultState,
  state: IState,
}) => {
  return (
    <>
    <div className="tableContainer">
      <table className="tableData">
        <tbody>
          <tr>
            <th>Country</th>
            <td>{props.state.country}</td>
          </tr>
          <tr>
            <th>Operator</th>
            <td>{props.state.operator}</td>
          </tr>
          <tr>
            <th>Prefix</th>
            <td>{props.state.prefix}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{props.state.phoneNumber}</td>
          </tr>
          <tr>
            <th>Message</th>
          </tr>
          <tr>
            <td colSpan={2}><div className="messageContent">{ReactHtmlParser(props.state.formattedMessage)}</div></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Button variant="outlined" color="primary" size="large" onClick={props.setDefaultState}>Start again</Button>
    </>
  );
}