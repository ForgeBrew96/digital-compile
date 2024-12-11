import './App.css'

import { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

import * as authService from './service/authService'
import * as cardService from './service/cardsService'

const App = () => {
const [user, setUser] = useState(authService.getUser())

const handleSignout = () => {
  authService.signout();
  setUser(null);
}

  return (
    <>
      <Routes>



      {user ? (
        <Route path="/" element={<Dashboard user={user}/>} />
      ) : (
        <Route path="/" element={<Landing />} />
      )}





    </Routes>
    </>
        )
}

export default App
