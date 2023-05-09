import { Admin } from "./pages/Admin/Admin"
import React from 'react';
import { Auth } from "./pages/Auth/Auth"
import { Basket } from "./pages/Basket/Basket"
import { DevicePage } from "./pages/DevicePage/DevicePage"
import { Favorites } from "./pages/Favorites/Favorites"
import { OfferPage } from "./pages/OfferPage"
import { Profile } from "./pages/Profile/Profile"
import { Shop } from "./pages/Shop/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_PAGE_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, OFFER_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />
  },
  {
    path: OFFER_ROUTE,
    Component: <OfferPage />
  },
  {
    path: PROFILE_ROUTE,
    Component: <Profile />
  },
]

export const publicRoutes = [
  {
    path: BASKET_ROUTE,
    Component: <Basket />
  },
  {
    path: SHOP_ROUTE,
    Component: <Shop />
  },
  {
    path: FAVORITES_ROUTE,
    Component: <Favorites />
  },
  {
    path: DEVICE_PAGE_ROUTE + '/:id',
    Component: <DevicePage />
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />
  }
  // {
  //   path: ADMIN_ROUTE,
  //   Component: <Auth />
  // },
  // {
  //   path: OFFER_ROUTE,
  //   Component: <Auth />
  // },
  // {
  //   path: PROFILE_ROUTE,
  //   Component: <Auth />
  // },
]