import React, { useRef, useState } from 'react';
import classnames from 'classnames'
import styles from './header.css';
import logo from '../../public/img/logo.svg'
import burger_btn from '../../public/img/burger_btn.svg'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BASKET_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import UserStore from '../../store/UserStore';
import { config } from 'process';


export function Header() {

  const IS_AUTH = UserStore._isAuth
  

  const [burgerState, setBurgerState] = useState(false)

  const location = useLocation().pathname
  const isShopLocation = (location === '/')
  console.log(isShopLocation);

  

  return (
    <div className={styles.header__wrapper}>
      <Link to={`../${SHOP_ROUTE}`} className={styles.wrapper__element}>
        <img className={styles.element__logo_img} src={logo} alt="" />
      </Link>
      <div id={styles.wrapper__element_nav} className={styles.wrapper__element}>
        <nav className={styles.element__nav_wrapper}>
          <NavLink onClick={ () => {
            setTimeout(() => {document.getElementById('new')?.scrollIntoView({behavior:'smooth', block: 'end'})}, (isShopLocation ? 0 : 650))
          }} to={`../${SHOP_ROUTE}`}>
            новинки
          </NavLink>
          <NavLink onClick={ () => {
            setTimeout(() => {document.getElementById('catalog')?.scrollIntoView({behavior:'smooth', block: 'start'})}, (isShopLocation ? 0 : 650))
          }} to={`../${SHOP_ROUTE}`}>
            каталог
          </NavLink>
          <NavLink onClick={ () => {
            setTimeout(() => {document.getElementById('contacts')?.scrollIntoView({behavior:'smooth', block: 'start'})}, (isShopLocation ? 0 : 650))
          }} to={`../${SHOP_ROUTE}`}>
            контакты
          </NavLink>
        </nav>
      </div>
      <div className={styles.wrapper__element}>
        <img onMouseEnter={() => setBurgerState(true)} id={styles.element__burger_img} src={burger_btn} alt="" />
        <div onMouseLeave={() => setBurgerState(false)} className={burgerState ? classnames(styles.element__burger_burger, styles.burger_active) : styles.element__burger_burger}>
            {IS_AUTH && <NavLink to={`../${PROFILE_ROUTE}`}>Личный кабинет</NavLink>}
            {!IS_AUTH && <NavLink to={`../${LOGIN_ROUTE}`}>Авторизоваться</NavLink>}
            <NavLink to={`../${FAVORITES_ROUTE}`}>Избранное</NavLink>
            <NavLink to={`../${BASKET_ROUTE}`}>Корзина</NavLink>
            {IS_AUTH && <NavLink to={`../${LOGIN_ROUTE}`} onClick={() => UserStore.setIsAuth(false)} >Выйти из профиля</NavLink>}
        </div>
      </div>
    </div>
  );
}
