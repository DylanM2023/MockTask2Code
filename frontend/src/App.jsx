import { useState } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import PageError from './pages/404Error'
import Login from './pages/login'
import './interceptor/axios';
import { Logout } from './components/logout'
import Register from './pages/register'
import Shop from './pages/shop'
import Tickets from './pages/ticket_checkout'
import Hotels from './pages/hotel_checkout'
import Account from './pages/account'
import Map from './pages/map'
import AnimalDetails from './pages/animal_info'

function App() {

  // Established browser Routes including a catch for any 404 Errors

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/ticket-checkout' element={<Tickets/>}/>
          <Route path='/hotel-checkout' element={<Hotels/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/animalinfo' element={<AnimalDetails/>}/>
          <Route path='*' element={<PageError/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
