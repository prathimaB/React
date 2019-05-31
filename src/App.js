import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import './App.scss';
import Header from './Container/Header';
import Routing from './Container/Routing';
import {BrowserRouter} from "react-router-dom";
import Footer from './Components/Footer';


function App() {
  return (
    <div>
    <BrowserRouter> 
        <Header></Header>
        <Routing></Routing>
    </BrowserRouter>
    <Footer></Footer>
     
    </div>

  );
}

export default App;
