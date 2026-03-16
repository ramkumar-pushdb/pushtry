
import React from 'react'
import './App.css';
import Home from './Home';
import Category from './Category';
import Header from './Header';
import "./Home.css"
import "./Header.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='img img-fluid'>
    
    <Header/>
    <div className='back'>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Category' element={<Category/>}/>
      
    </Routes>

    </div>
    </div>
    
    
  );
}

export default App;