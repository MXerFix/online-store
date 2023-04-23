import React from 'react'
import { Shop } from './pages/Shop/Shop'
import { Router, Routes , Route, Navigate, BrowserRouter } from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes'
import { Favorites } from './pages/Favorites/Favorites'
import { Basket } from './pages/Basket/Basket'
import AppRouter from './components/AppRouter'

export default function App() {

  const IS_AUTH = false

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
