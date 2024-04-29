import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

const Layout = lazy(() => import('./pages/layout'))

function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='bg-gray-100 w-full h-screen'/>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:lang" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
