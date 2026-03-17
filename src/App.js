import React from 'react';
import './App.css';
import Home from './Home';
import Men from './Products/Men';
import Header from './Header';
import Women from './Products/women';
// import Kids from './Products/Kids';
// import Genz from './Products/Genz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="app-wrapper">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path='/women' element={<Women/>}/>
            {/* <Route path='/kids' element={<Kids/>}/>
            <Route path='/genz' element={<Genz/>}/> */}
          </Routes>
        </div>
      </div>
    
  );
}

export default App;