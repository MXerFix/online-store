import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import styles from './basket.css';
import addInCart_img from '../../public/img/plusInCart.svg'
import UserStore from '../../store/UserStore';
import BasketStore from '../../store/BasketStore';
import CatalogProdCard from '../../components/CatalogProdCard/CatalogProdCard';
import BasketProdCard from '../../components/BasketProdCard/BasketProdCard';
import { observer } from 'mobx-react-lite';
import { ScrollRestoration } from 'react-router-dom';
import { toJS } from 'mobx';
import DeviceStore from '../../store/DeviceStore';
import InvertBtn from '../../UI/InvertBtn/InvertBtn';
import { createOfferDeviceFn, createOfferFn } from '../../http/offerAPI';
import TypesStore from '../../store/TypesStore';
import BrandsStore from '../../store/BrandsStore';
import { fetchTypes } from '../../http/typesAPI';
import { fetchBrands } from '../../http/brandsAPI';
import { fetchDevices } from '../../http/deviceAPI';
import PreloaderMini from '../../components/PreloaderMini/PreloaderMini';
import { BasketList } from './components/BasketList/BasketList';

const PAYMENT__WHEN_GET = 'when_get'
const PAYMENT__CARD = 'card'
const PAYMENT__SBP = 'sbp'

export const Basket = observer(() => {

  const [payment, setPayment] = useState(PAYMENT__WHEN_GET)
  // const [basketList, setBasketList] = useState(toJS(DeviceStore.devices).filter((obj) => { return BasketStore.BASKET_LIST.includes(obj.id) }))

  useEffect(() => {
    fetchTypes().then(data => TypesStore.setTypes(data))
    fetchBrands().then(data => BrandsStore.setBrands(data))
    fetchDevices().then(data => DeviceStore.setDevices(data))
  }, [])

  

  // useEffect(() => {
  //   setBasketList(toJS(DeviceStore.devices).filter((obj) => { return BasketStore.BASKET_LIST.includes(obj.id) }))
  // }, [])

  // useEffect(() => {
  //   setBasketList(toJS(DeviceStore.devices).filter((obj) => { return BasketStore.BASKET_LIST.includes(obj.id) }))
  // }, [BasketStore.basketList])




  const addOfferDevice = async () => {

  }

  const basketList = toJS(DeviceStore.devices).filter((obj) => { return BasketStore.BASKET_LIST.includes(obj.id) })
  const basketListJSX = basketList.map(({ id, name, description, price, oldPrice, img }) => {
    return (
      <div key={id} className={styles.basket__product_card}>
        <BasketProdCard id={id} name={name} price={price} description={description} oldPrice={oldPrice} img={img} />
      </div>
    )
  })

  const sum = (basketList.length > 1 ? basketList.reduce((prev, curr) => {return prev.price += curr.price}) : (basketList.length === 1 ? basketList[0].price : 0));

  const addOffer = async (userEmail:string, sum:number) => {
    try {
      const response = await createOfferFn({userEmail: userEmail, sum: sum}).then(data => {
        basketList.forEach((device) => {
          createOfferDeviceFn({offerID: data.offer.id, deviceID: device.id})
        })
      })
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.basket_wrapper}>
        <h2 className={styles.basket_title}>Оформление заказа</h2>
        <div className={styles.basket_block}>
          <h3 className={styles.basket__block_title}>Проверьте содержимое заказа</h3>
          <div className={styles.basket__items_block}>
            {basketListJSX.length ? <BasketList basketList={basketListJSX} sum={sum} /> : <PreloaderMini />}
          </div>
        </div>
        <div className={styles.basket_block}>
          <h3 className={styles.basket__block_title}>Внесите данные для оформления заказа</h3>
          <div className={styles.basket__person_block}>
            <input defaultValue={UserStore.user.name} placeholder='Ваше имя' required type="name" />
            <input defaultValue={UserStore.user.email} placeholder='Электронная почта' required type="email" />
            <input defaultValue={UserStore.user.tel} placeholder='Мобильный телефон' type="tel" />
          </div>
        </div>
        <div className={styles.basket__double_block}>
          <div className={styles.basket_block}>
            <h3 className={styles.basket__block_title}>Выберите адрес доставки</h3>
            <div className={styles.basket__address_block}>
              <select name="" id="">
                <option value="saint_petersburg">Санкт-Петербург</option>
                <option value="moscow">Москва</option>
              </select>
              <input placeholder='Станция метро (необязательно)' className={styles.address__block_input + ' ' + styles.address__block_input_big} type="metro" />
              <input required placeholder='Улица' className={styles.address__block_input + ' ' + styles.address__block_input_big} type="street" />
              <div className={styles.mini_inputs_box}>
                <input required placeholder='Дом (корпус / строение)' className={styles.address__block_input} type="house" />
                <input placeholder='Квартира (необязательно)' className={styles.address__block_input} type="apartment" />
              </div>
            </div>
          </div>
          <div className={styles.basket_block}>
            <h3 className={styles.basket__block_title}>Выберите способ оплаты</h3>
            <div className={styles.basket__payment_block}>
              <span onClick={() => setPayment(PAYMENT__WHEN_GET)} className={payment === PAYMENT__WHEN_GET ? styles.payment_active : ''}>При получении</span>
              <span onClick={() => setPayment(PAYMENT__CARD)} className={payment === PAYMENT__CARD ? styles.payment_active : ''}>Картой онлайн</span>
              <span onClick={() => setPayment(PAYMENT__SBP)} className={payment === PAYMENT__SBP ? styles.payment_active : ''}>Система быстрых платежей (СБП)</span>
            </div>
          </div>
        </div>
        <div className={styles.basket__takeOffer_btn}>
          <InvertBtn onClick={() => {addOffer(UserStore.user.email, sum)}}> Оформить заказ </InvertBtn>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
})
