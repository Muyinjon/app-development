import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import { BrowserRouter as Router,Route, Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Cars from './pages/cars';
import Planes from './pages/planes';
import Trains from './pages/trains';
import * as React from 'react';


function App() {
  return (<>
    <Navigation className=""></Navigation>



    <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/planes' element={<Planes />} />
      <Route path='/trains' element={<Trains />} />
    </Routes>
    </div>
 
    </>

  );
}




export default App;
