import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import { Header } from '../../components/Header/Header';
import styles from './auth.css';
import UserStore from '../../store/UserStore';
import { redirect, useNavigate } from 'react-router-dom';



export function Auth() {

  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className={styles.auth_wrapper}>
      <Header />
      {isLogin &&
        <div className={styles.auth_window}>
          <div className={styles.auth_title}>
            <h1>Войти в профиль</h1>
            <p>или</p>
            <a onClick={(e) => { e.stopPropagation(); e.preventDefault(); setIsLogin(false) }} >зарегистрироваться</a>
          </div>
          <form className={styles.auth_form}>
            <label className={styles.auth__input_label} htmlFor="auth__input_email">Электронная почта</label>
            <input type="email" name='email' className={styles.auth_input} id='auth__input_email' />
            <label className={styles.auth__input_label} htmlFor="auth__input_password">Пароль</label>
            <input type="password" name='password' className={styles.auth_input} id="auth__input_password" />
            <div className={styles.auth__input_underline}>
              <div>
                <input type="checkbox" name="remember_me" id="auth__input_checkbox" />
                <label className={styles.auth__input_label} htmlFor="auth__input_checkbox">запомнить меня</label>
              </div>
              <a className={styles.auth__forget_password} href="">Забыли пароль?</a>
            </div>
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); UserStore.setIsAuth(true); if (UserStore._isAuth) return navigate("/profile"); }} className={styles.auth__logIn_btn}>Войти</button>
          </form>
        </div>}
      {!isLogin &&
        <div className={styles.auth_window}>
          <div className={styles.auth_title}>
            <h1>Зарегистрироваться</h1>
            <p>или</p>
            <a onClick={(e) => { e.stopPropagation(); e.preventDefault(); setIsLogin(true) }} >войти в профиль</a>
          </div>
          <form className={styles.auth_form}>
            <label className={styles.auth__input_label} htmlFor="auth__input_name">Ваше имя</label>
            <input type="name" name='name' className={styles.auth_input} id='auth__input_name' />
            <label className={styles.auth__input_label} htmlFor="auth__input_email">Электронная почта</label>
            <input type="email" name='email' className={styles.auth_input} id='auth__input_email' />
            <label className={styles.auth__input_label} htmlFor="auth__input_password">Пароль</label>
            <input type="password" name='password' className={styles.auth_input} id="auth__input_password" />
            <div className={styles.auth__input_underline}>
              <div>
                <input type="checkbox" name="remember_me" id="auth__input_checkbox" />
                <label className={styles.auth__input_label} htmlFor="auth__input_checkbox">запомнить меня</label>
              </div>
              <a className={styles.auth__forget_password} href="">Забыли пароль?</a>
            </div>
            <button className={styles.auth__logIn_btn}>Регистрация</button>
          </form>
        </div>}
    </div>
  );
}