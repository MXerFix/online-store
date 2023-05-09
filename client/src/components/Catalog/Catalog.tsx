import React, { useEffect, useState } from 'react';
import styles from './catalog.css';
import major_4 from '../../public/img/major_4_nofon.png'
import emberton_1 from '../../public/img/emberton_nofon.png'
import major3_wh from '../../public/img/major3_wh.png'
import major2_br from '../../public/img/major2_br.png'
import mid_anc from '../../public/img/midANC.png'
import kublurn from '../../public/img/kulburn.png'
import FavoritesStore from '../../store/FavoritesStore';
import CatalogProdCard from '../CatalogProdCard/CatalogProdCard';
import classnames from 'classnames'

export const productsList = [
  { id: 110101, type: 'headset', brand: 'marshall', name: 'Major IV', description: 'БОЛЕЕ 30 ЧАСОВ БЕСПРОВОДНОГО ЗВУЧАНИЯ', price: 12990, img: major_4 },
  { id: 110102, type: 'headset', brand: 'marshall', name: 'Major III', description: 'БОЛЕЕ 30 ЧАСОВ БЕСПРОВОДНОГО ЗВУЧАНИЯ', price: 10590, oldPrice: 12990, img: major3_wh },
  { id: 110103, type: 'headset', brand: 'marshall', name: 'Major II', description: 'БОЛЕЕ 20 ЧАСОВ БЕСПРОВОДНОГО ЗВУЧАНИЯ', price: 8590, oldPrice: 10990, img: major2_br },
  { id: 110104, type: 'headset', brand: 'marshall', name: 'MID A.N.C', description: 'НАУШНИКИ С ШУМОПОДАВЛЕНИЕМ', price: 12590, img: mid_anc },
  { id: 120101, type: 'acoustic', brand: 'marshall', name: 'Emberton', description: 'С 20+ ЧАСАМИ ПОРТАТИВНОГО ВРЕМЕНИ', price: 11990, oldPrice: 13990, img: emberton_1 },
  { id: 120102, type: 'acoustic', brand: 'marshall', name: 'Kulburn', description: 'РАЗНОНАПРАВЛЕННЫЙ ЗВУК', price: 24990, img: kublurn },
]


export function Catalog() {


  // const [favoritesList, setFavoritesList]:any = useState([FavoritesStore.FAVORITES_LIST])


  // const setFavoriteProductId = ( id:number ) => {
  //   return setFavoritesList( [...favoritesList, id] )
  // }

  // const removeFavoriteProductId = (id:number) => {
  //   return setFavoritesList( favoritesList.filter((item: number) => { return item !== id }) )
  // }

  // useEffect(() => {
  //   const items:any = localStorage.getItem('favorites')
  //   if (items) {
  //     setFavoritesList(JSON.parse(items))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('favorites', JSON.stringify(favoritesList))
  //   console.log(favoritesList)
  // }, [favoritesList])
  
  


  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  

  return (
    <div id='catalog' className={styles.catalog_wrapper}>
      <h2 className='title_monts_contacts fz-48'>Каталог</h2>
      <div className={styles.catalog__catalog_box}>
        <div className={styles.catalog__header}>
          <div className={styles.catalog__header_category}>
            <button className={category === 'all' ? classnames(styles.header__category_btn, styles.category__btn_active) : styles.header__category_btn} onClick={() => setCategory('all')}>Все категории</button>
            <button className={category === 'headset' ? classnames(styles.header__category_btn, styles.category__btn_active) : styles.header__category_btn} onClick={() => setCategory('headset')}>Наушники</button>
            <button className={category === 'acoustic' ? classnames(styles.header__category_btn, styles.category__btn_active) : styles.header__category_btn} onClick={() => setCategory('acoustic')}>Акустика</button>
          </div>
          <div className={styles.catalog__header_sort}>
            <span className={styles.catalog__sort_span}></span>
            <div className={styles.catalog__sort_dropdown} >

            </div>
          </div>
          <div className={styles.catalog__header_search}>
            <input onChange={(e) => setSearch(e.target.value)} className={styles.catalog__search_input} type="text" />
          </div>
        </div>
        <div className={styles.catalog__products}>
          {category === 'all' && productsList.map(({ id, name, description, price, oldPrice, img }) => {
            if (name && name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div key={id} className={styles.catalog__product_item}>
                  <CatalogProdCard id={id} name={name} description={description} price={price} oldPrice={oldPrice} img={img} />
                </div>
              )
            }
          })}
          {category !== 'all' && productsList.map(({ id, name, description, price, oldPrice, img, type }) => {
            if (type === category && name && name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div key={id} className={styles.catalog__product_item}>
                  <CatalogProdCard id={id} name={name} description={description} price={price} oldPrice={oldPrice} img={img} />
                </div>
              )
            }
          })}
          {!productsList.filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase())).length && <div className={styles.catalog_notFoundItem}><span className={styles.catalog_notFoundItem_text}>Извините, но устройства с названием<strong> {search} </strong>не нашлось...</span></div>}
        </div>
      </div>
    </div>
  );
}
