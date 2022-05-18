import React from 'react';
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Home from './views/home';
import About from './component/page/About';
import Services from './views/services';
import SignUp from './views/signup';
import Contact from './views/contact';
import Team from './component/page/teams';
import Skills from './component/page/skills';
import EU from './views/eu';
import Navbar from './components/Navbar';
 import Registration from './views/register';
import Addlocalshop from './views/Add local shop';
import State from './views/state';
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/register' element={<NameForm/>} />
        <Route path='/EU' element={<EU/>} />
        <Route path='/addlocalshop' element={<Addlocalshop/>} />
        <Route path='/state' element={<State/>} />
    </Routes>   
    </Router>
     );
    }   
  
export default App;
  
