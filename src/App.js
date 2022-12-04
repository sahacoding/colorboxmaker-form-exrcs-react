import React, { Component } from 'react'
import Box from './Box'
import BoxList from './BoxList'
// import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      {/* <Box height = {10} width = {20} color = "teal"/>
      <Box height = {20} width = {20} color = "purple"/> */}
      <BoxList/>
      </div>
    );
  }
 
}

export default App;
