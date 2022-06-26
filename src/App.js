import React from 'react';
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './views/home';
import About from './views/About';
import Services from './views/services';
import SignUp from './views/signup';
import Contact from './views/contact';
import Team from './views/Team';
import Skills from './views/Skills';
import EU from './views/eu';
import Navbar from './components/Navbar';
import Registration from './views/register';
import NameForm from './views/nameform';
import Addlocalshop from './views/Add local shop';
import State from './views/state';
import login from './views/login';
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home aH="active" />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/teams' element={<Team/>} />
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/signup' element={<SignUp />} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/EU' element={<EU aE="active" />} />
        <Route path='/addlocalshop' element={<Addlocalshop aA="active" />} />
        <Route path='/state' element={<State/>} />
        <Route path='/login' element={<SignUp aS="active" />} />
    </Routes>   
    </Router>
     );
    }   
  
export default App;
  


