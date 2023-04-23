import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Basket } from '../pages/Basket/Basket'
import { Favorites } from '../pages/Favorites/Favorites'
import { Shop } from '../pages/Shop/Shop'
import { authRoutes, publicRoutes } from '../routes'

export default function AppRouter() {

  const IS_AUTH = false

  return (
    <Routes>
      {IS_AUTH && authRoutes.map(({ path, Component }) =>
      <Route key={path} path={path} element={Component}/>
    )}
    {publicRoutes.map(({ path, Component }) =>
      <Route key={path} path={path} element={Component}/>
    )}
      <Route path='*' element={<Shop />} />
    </Routes>
  )
}
