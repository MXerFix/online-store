import React from 'react'
import { Shop } from './pages/Shop/Shop'
import { Router, Routes , Route, Navigate, BrowserRouter, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { authRoutes, publicRoutes } from './routes'
import { Favorites } from './pages/Favorites/Favorites'
import { Basket } from './pages/Basket/Basket'
import AppRouter from './components/AppRouter'
import './main.global.css'
import { HashRouter } from 'react-router-dom'

export default function App() {

  return (
      <AppRouter />
  )
}
