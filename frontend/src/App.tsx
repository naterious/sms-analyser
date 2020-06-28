import React from 'react';
import './App.css';

import {ThemeProvider} from '@material-ui/core';

import InputForm from './components/InputForm';
import ResultTable from './components/ResultTable';
import ErrorAlert from './components/ErrorAlert';
import { analyseSmsMessage } from './utils/analyseSmsMessage';
import { defaultState, theme } from './constants';
import { OnChange, HandleSubmit, SetDefaultState, ViewSwitcher } from './types';

class App extends React.Component {
  state = defaultState;

  onChange: OnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit: HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formattedMessageResponse = await analyseSmsMessage(this.state)
      this.setState({ ...formattedMessageResponse, display: true });
    } catch (e) {
      this.setState({displayError: true, formattedMessage: e.message});
    }
  };

  setDefaultState: SetDefaultState = () => this.setState(defaultState)

  viewSwitcher: ViewSwitcher = () => {
    if (!this.state.display) {
      return (
      <>
      {InputForm({onChange: this.onChange, handleSubmit: this.handleSubmit})}
      {ErrorAlert(this.state)}
      </>
      )
    }
   
    return (
      <>{ResultTable({setDefaultState: this.setDefaultState, state: this.state})}</>
    );
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App" id="mainContainer">
          <div className="title">
            <h1>SMS ANALYSER</h1>
          </div>
        
          <div className="content">{this.viewSwitcher()}</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;