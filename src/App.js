import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './pages/layout'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route  element={<Layout />}>
        <Route path="/" element={<Home />} />


          
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
