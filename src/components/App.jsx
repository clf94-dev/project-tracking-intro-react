import React from 'react';
import { Button, Grid } from '@material-ui/core';
import "./App.scss";
import Intro from "./Intro";
import Navbar from './Navbar';


function App() {
  return (<div>
      <Navbar />
  <Intro />
  </div>);
}

export default App;