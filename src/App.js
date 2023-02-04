import React, { useState } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Jumbotron} from './components/Jumbotron';
import {Reservation} from './components/Reservation';
import {Footer} from './components/Footer';
import {Contact} from './components/Contact';
import {About} from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <Header/>
      <Jumbotron/>    
      <Routes>            
        <Route path="/reservacion" element={<Reservation/>} />   
        <Route path="/direccion" element={<About/>} />
        <Route path="/contactanos" element={<Contact/>} />      
      </Routes>
      <Footer/>    
    </>
  );
}

export default App;