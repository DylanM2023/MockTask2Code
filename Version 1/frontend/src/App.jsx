import { useState } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import PageError from './pages/404Error'
import Login from './pages/login'
import './interceptor/axios';
import { Logout } from './components/logout'

function App() {

  // Established browser Routes including a catch for any 404 Errors

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='*' element={<PageError/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
