import React, { useEffect, useState } from 'react';
import CatalogProdCard from '../../components/CatalogProdCard/CatalogProdCard';
import { Header } from '../../components/Header';
import styles from './favorites.css';
import FavoritesStore from '../../store/FavoritesStore';
import { observer } from "mobx-react-lite"
import { Contacts } from '../../components/Contacts/Contacts';
import { ScrollRestoration } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import DeviceStore from '../../store/DeviceStore';
import { toJS } from 'mobx';
import TypesStore from '../../store/TypesStore';
import BrandsStore from '../../store/BrandsStore';
import { fetchDevices } from '../../http/deviceAPI';
import { fetchBrands } from '../../http/brandsAPI';
import { fetchTypes } from '../../http/typesAPI';
import PreloaderMini from '../../components/PreloaderMini/PreloaderMini';




export const Favorites = observer(() => {

  const [isPageLoading, setIsPageLoading] = useState(false)

  useEffect(() => {
    setIsPageLoading(true)
    fetchTypes().then(data => TypesStore.setTypes(data))
    fetchBrands().then(data => BrandsStore.setBrands(data))
    fetchDevices().then(data => DeviceStore.setDevices(data))
    setIsPageLoading(false)
  }, [])
  


  const favoritesList = toJS(DeviceStore.devices).filter((obj) => { return FavoritesStore.FAVORITES_LIST.includes(obj.id) })
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
        { favoritesListJSX.length ? favoritesListJSX : <PreloaderMini /> }
      </div>
      <Contacts />
      <ScrollRestoration />
    </div>
  );
  
})
