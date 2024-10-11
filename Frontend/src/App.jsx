import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Login from './Components/Login';
import Map from './Components/Map';
import Help from './Components/Help';
import HelpPage from './Components/HelpPage';
import Nokri from './Components/Nokri';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/ride' element={<Map />} />
            <Route path='/helpPage' element={<HelpPage />} />
            <Route path='/nokri' element={<Nokri/>} ></Route>
           
          </Routes>
          <Help />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
