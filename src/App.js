import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/property/:id' element={<PropertyDetails />} />
        <Route exact path='login' element={<Login/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;