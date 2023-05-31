import React, { useEffect, useState } from 'react'
import { Shop } from './pages/Shop/Shop'
import { Router, Routes, Route, Navigate, BrowserRouter, createBrowserRouter, createRoutesFromElements, ScrollRestoration } from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes'
import { Favorites } from './pages/Favorites/Favorites'
import { Basket } from './pages/Basket/Basket'
import AppRouter from './components/AppRouter'
import './main.global.css'
import { HashRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { check } from './http/userAPI'
import UserStore from './store/UserStore'
import Preloader from './components/Preloader/Preloader'

const App = observer(() => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then( (userData) => {
        UserStore.setUser(userData)
        UserStore.setIsAuth(true)
      } ).finally(() => setLoading(false))
    }, 1000);
  }, [])

  if (loading) return (<Preloader />)
  

  return (
    <AppRouter />
)
})

export default App
