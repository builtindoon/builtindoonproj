import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Services from './views/services';
import SignUp from './views/signup';
import Contact from './views/contact';
import Team from './component/page/teams';
import Skills from './component/page/skills'
import Navbar from './components/Navbar'
  
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
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;
  
