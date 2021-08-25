
import './App.css';

import React from 'react';
import Header from './Components/Header/Header'
import Quotegenerator from './Components/QuoteGenerator/Quotegenerator'
import Footer from'./Components/Footer/Footer'

function App() {
 

  return (
   
    <div className="container">
      <Header/>
      <Quotegenerator/>
      <Footer/>
    </div>
    
  );
}

export default App;
