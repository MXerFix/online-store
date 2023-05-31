import classNames from 'classnames';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { fetchBrands } from '../../http/brandsAPI';
import { fetchTypes } from '../../http/typesAPI';
import BrandsStore from '../../store/BrandsStore';
import TypesStore from '../../store/TypesStore';
import UserStore from '../../store/UserStore';
import InvertBtn from '../../UI/InvertBtn/InvertBtn';
import styles from './admin.css';
import { AddBrand } from './components/AddBrand/AddBrand';
import { AddDevice } from './components/AddDevice/AddDevice';
import { AddType } from './components/AddType/AddType';



export const Admin = observer(() => {

  useEffect(() => {
    fetchTypes().then(data => TypesStore.setTypes(data))
  }, [])

  useEffect(() => {
    fetchBrands().then(data => BrandsStore.setBrands(data))
  }, [])


  const IS_ADMIN = UserStore._user.role === 'ADMIN'

  const [anyForm, setAnyForm] = useState(false)
  const [deviceForm, setDeviceForm] = useState(false)
  const [brandForm, setBrandForm] = useState(false)
  const [typeForm, setTypeForm] = useState(false)

  const cancelAdd = (e:any) => {
    e.preventDefault()
    setBrandForm(false)
    setDeviceForm(false)
    setTypeForm(false)
    setAnyForm(false)
  }


  if (!IS_ADMIN) {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='content'>
          У вас нет доступа к этому разделу
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='content'>
          <InvertBtn className={anyForm ? classNames(styles.add_btn, styles.device_add__form_disabled) : styles.add_btn} onClick={() => { setDeviceForm(true); setAnyForm(true) }} > Добавить устройство </InvertBtn>
          <InvertBtn className={anyForm ? classNames(styles.add_btn, styles.device_add__form_disabled) : styles.add_btn} onClick={() => { setBrandForm(true); setAnyForm(true) }} > Добавить бренд </InvertBtn>
          <InvertBtn className={anyForm ? classNames(styles.add_btn, styles.device_add__form_disabled) : styles.add_btn} onClick={() => { setTypeForm(true); setAnyForm(true) }} > Добавить категорию </InvertBtn>
          <AddDevice cancelFn={cancelAdd} className={deviceForm ? styles.modal_wrapper : classNames(styles.modal_wrapper, styles.modal_wrapper__disabled)} />
          <AddBrand cancelFn={cancelAdd} className={brandForm ? styles.modal_wrapper : classNames(styles.modal_wrapper, styles.modal_wrapper__disabled)} />
          <AddType cancelFn={cancelAdd} className={typeForm ? styles.modal_wrapper : classNames(styles.modal_wrapper, styles.modal_wrapper__disabled)} />
        </div>
      </div>
    )
  }

})


