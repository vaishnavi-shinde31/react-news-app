import logo from './logo.svg';
import './App.css';
//rcc
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

//class based component
export default class App extends Component {
  
  //constructor(){
    //super();
    //console.log("this is a constructor")
  //}
  
  render() {
    return (
     <>
     <Navbar />
     <News />
     </>
    )
  }
}



