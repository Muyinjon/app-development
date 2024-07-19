import './App.css';
import Navbar from './components/navbars';
import Home from './components/home';
import Contacts from './components/contacts';
import About from './components/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1 className='title'>React Routing By Muyinjon Turobov </h1>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navbar />}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contacts' element={<Contacts />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
