import './App.css'

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import SigninForm from './components/SigninForm/SigninForm'
import SignupForm from './components/SignupForm/SignupForm'
import CustomCard from './components/CustomCard/CustomCard'
import HowToPlay from './components/HowToPlay/HowToPlay'
import NavBar from './components/NavBar/NavBar'
import ProtocolDB from './components/ProtocolDB/ProtocolDB'
import Shop from './components/Shop/Shop'

import * as authService from './service/authService'
import * as cardService from './service/cardsService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [ogCards, setOgCards] = useState([])

  const handleSignout = () => {
    authService.signout()
    setUser(null)
    setIsOpen(false)
  }

  useEffect(() => {
    const fetchOgCards = async () => {
      try{
       const originalCards = await cardService.getOriginalCard()
       setOgCards(originalCards)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOgCards()
  }, [])

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>


        {user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        <Route path='/signup' element={<SignupForm setUser={setUser} user={user} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} user={user} />} />

        <Route path='/customcard' element={<CustomCard user={user} />} />
        <Route path='/howtoplay' element={<HowToPlay user={user} />} />
        <Route path='/protocoldb' element={<ProtocolDB user={user} ogCards={ogCards}/>} />
        <Route path='/shop' element={<Shop user={user} />} />

      </Routes>
    </>
  )
}

export default App
