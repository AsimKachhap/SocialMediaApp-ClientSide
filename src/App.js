import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
       <Navbar />
       <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth}/>
       </Routes>
       <Home />
    </Container>
    </BrowserRouter>
    
  )
}

export default App;