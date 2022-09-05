import React from 'react';
import {Container} from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  return (
    <GoogleOAuthProvider clientId= "45399943182-f7pgaghi6ulda2t7lh90gp68erv4ip3i.apps.googleusercontent.com ">
    <BrowserRouter>
      <Container maxWidth="lg">
       <Navbar />
       <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/auth" exact element={<Auth/>}/>
       </Routes>
    </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
    
  )
}

export default App;