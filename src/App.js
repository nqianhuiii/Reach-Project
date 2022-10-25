import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Vendor from './components/pages/Vendor';
import Customer from './components/pages/Customer';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element= {<Home/>} />
          <Route path='/vendor' exact element= {<Vendor/>} />
          <Route path='/customer' exact element= {<Customer/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
