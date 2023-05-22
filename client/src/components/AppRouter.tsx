import { observer } from 'mobx-react-lite'
import path from 'path'
import React, { useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes, useLocation, useMatches, useNavigate, useNavigation } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { authRoutes, publicRoutes } from '../routes'
import UserStore from '../store/UserStore'
import { ADMIN_ROUTE, DEVICE_PAGE_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from '../utils/consts'

const AppRouter = observer(() => {

  const IS_AUTH = UserStore._isAuth

  const routes = (IS_AUTH ? authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />) : publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />))

  const router = createBrowserRouter(
    createRoutesFromElements(
      (
        routes
      )
    )
  )

  // const navigate = useNavigate()

  const isAuthPath = (path: string) => {
    if (path === PROFILE_ROUTE || path === ADMIN_ROUTE) {
      return path = LOGIN_ROUTE
    }
  }

  return (
    <RouterProvider router={router} />
  )
})


export default AppRouter