import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Auth, Home } from './Pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {

  return (<>
    <Routes>
      <Route path='*' element={<Navigate to={'/auth'} />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='home' element={<Home />} />
    </Routes>
    <ToastContainer />
  </>
  );
}
