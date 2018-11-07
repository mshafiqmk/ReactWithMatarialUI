import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export default class Success extends Component {
  render() {
    return (
    <MuiThemeProvider >
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thanks for You Submission</h1>
          <p>You will get notification soon ! 😃😃😃</p>
        </React.Fragment>
    </MuiThemeProvider>
          );
  }
}
