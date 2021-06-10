import React from 'react'
import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import './style.css'

function App() {
  return (
    <div className="app">
      <Routes></Routes>
      <ToastContainer autoClose={3000}></ToastContainer>
    </div>
  );
}

export default App;
