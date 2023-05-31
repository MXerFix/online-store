import React, { useEffect, useState } from 'react';
import CatalogProdCard from '../../components/CatalogProdCard/CatalogProdCard';
import { Header } from '../../components/Header';
import styles from './favorites.css';
import { productsList } from '../../components/Catalog/Catalog';
import FavoritesStore from '../../store/FavoritesStore';
import { observer } from "mobx-react-lite"
import { Contacts } from '../../components/Contacts/Contacts';
import { ScrollRestoration } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';




export const Favorites = observer(() => {

  const [isPageLoading, setIsPageLoading] = useState(false)


  const favoritesList = productsList.filter((obj) => { return FavoritesStore.FAVORITES_LIST.includes(obj.id) })
  const favoritesListJSX = favoritesList.map(({ id, name, description, price, oldPrice, img }) => {
    return (
      <div key={id} className={styles.favorite__product_card}>
        <CatalogProdCard id={id} name={name} description={description} price={price} oldPrice={oldPrice} img={img} />
      </div>
    )
  })

  return (
    <div className={styles.favorites__wrapper}>
      <div>
        <Header />
      </div>
      <div className={styles.favorites__cards_box}>
        { isPageLoading ? <Preloader /> : favoritesListJSX }
      </div>
      <Contacts />
      <ScrollRestoration />
    </div>
  );
  
})
