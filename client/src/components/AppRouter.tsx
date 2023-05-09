import { observer } from 'mobx-react-lite'
import path from 'path'
import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { authRoutes, publicRoutes } from '../routes'
import UserStore from '../store/UserStore'
import { ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../utils/consts'

const AppRouter = observer(() => {

  const navigate = useNavigate()

  const isAuthPath = (path: string) => {
    if (path === PROFILE_ROUTE || path === ADMIN_ROUTE) {
      return path = LOGIN_ROUTE
    }
  }

  const IS_AUTH = UserStore._isAuth

  return (
    <Routes>
      {IS_AUTH && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component} />
      )}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
})


export default AppRouter