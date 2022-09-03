import React from 'react';
import './App.css'
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/:username' element={<Layout />} />
      <Route path='/detail/:user' element={<Layout />} />
    </Routes>
  )
}

export default App;
