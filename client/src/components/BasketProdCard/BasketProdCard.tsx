import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import BasketStore from '../../store/BasketStore';
import FavoritesStore from '../../store/FavoritesStore';
import InvertBtn from '../../UI/InvertBtn/InvertBtn';
import { API_URL } from '../../utils/consts';
import styles from './basketprodcard.css';

interface BasketProdCardI {
  id: number,
  name: string,
  description: string,
  img: string,
  price: number,
  oldPrice?: number,
}

const BasketProdCard = ({ id, name, description, img, price, oldPrice }: BasketProdCardI) => {

  const [counter, setCounter] = useState(1)

  const [favorite, setFavorite] = useState(false)
  const [basket, setBasket] = useState(false)
  

  useEffect(() => {
    if (FavoritesStore.FAVORITES_LIST.filter((item: number) => { return item === id }).length) setFavorite(true)
  }, [favorite])

  useEffect(() => {
    if (BasketStore.BASKET_LIST.filter((item: number) => { return item === id }).length) setBasket(true)
  }, [basket])

  return (
    <div className={styles.bProdCard_wrapper}>
      <div className={styles.bProdCard_left}>
        <div className={styles.left__image_block}>
          <img className={styles.bProdCard_left_img} src={ API_URL + img} alt="" />
          <span>{id}</span>
        </div>
        <div className={styles.left__name_block}>
          <div className={styles.left__name_block_name}>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className={styles.left__name_block_buttons}>
            <InvertBtn onClick={() => { setFavorite(!favorite); return (favorite ? FavoritesStore.removeFavoriteId(id) : FavoritesStore.addFavoriteId(id)) }} style={favorite ? { fontSize: '12px', width: '120px', padding: '8px 10px', backgroundColor: 'white' } : { fontSize: '12px', width: '120px', padding: '8px 10px', backgroundColor: 'transparent' }}> {favorite ? 'В избранном' : 'В избранное'} </InvertBtn>
            <InvertBtn onClick={() => { if (confirm('Удалить товар из корзины?')) { console.log('confirm true'); setBasket(!basket);  return (BasketStore.removeBasketId(id))} }} style={{ fontSize: '12px', width: '120px', padding: '8px 10px', marginLeft: '8px' }}> Удалить </InvertBtn>
          </div>
        </div>
      </div>
      <div className={styles.bProdCard_right}>
        <div className={styles.prodCounter_box}>
          <button onClick={() => {counter === 1 ? setCounter(1) : setCounter(counter-1)}} className={classNames(styles.counter_btn, styles.counter_minus)}> - </button>
          <p> {counter} </p>
          <button onClick={() => setCounter(counter+1)} className={classNames(styles.counter_btn, styles.counter_plus)}> + </button>
        </div>
        <div className={styles.prodPrice_box}>
          <span> {oldPrice ? oldPrice*counter + '₽' : ''} </span>
          <p>{price*counter} ₽</p>
        </div>
      </div>
    </div>
  )
}

export default BasketProdCard