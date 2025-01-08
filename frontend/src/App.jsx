import { useState } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import PageError from './pages/404Error'

function App() {

  // Established browser Routes including a catch for any 404 Errors

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<PageError/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
