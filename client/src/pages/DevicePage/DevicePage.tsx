import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import { ucFirst } from '../..';
import { productsList } from '../../components/Catalog';
import { Header } from '../../components/Header';
import BasketStore from '../../store/BasketStore';
import FavoritesStore from '../../store/FavoritesStore';
import InvertBtn from '../../UI/InvertBtn/InvertBtn';
import { COLOR_BLACK, COLOR_BROWN, COLOR_GREY, COLOR_WHITE, EMBERTON, KULBURN, MAJOR_2, MAJOR_3, MAJOR_4, MID_ANC, PAGE_BLACK, PAGE_BROWN, PAGE_GREY, PAGE_WHITE } from '../../utils/consts';
import styles from './devicepage.css';
import EmbertonAdd from './EmbertonAdd/EmbertonAdd';
import KulburnAdd from './KulburnAdd/KulburnAdd';
import Major2Add from './Major2Add/Major2Add';
import Major3Add from './Major3Add/Major3Add';
import Major4Add from './Major4Add/Major4Add';
import MinANCAdd from './MidANCAdd/MinANCAdd';

function chooseColor(nativeColor: string) {
  switch (nativeColor) {
    case COLOR_BLACK: { return PAGE_BLACK; break }
    case COLOR_BROWN: { return PAGE_BROWN; break }
    case COLOR_GREY: { return PAGE_GREY; break }
    case COLOR_WHITE: { return PAGE_WHITE; break }
  }
}

function whatDevice(deviceName: string) {
  switch (deviceName) {
    case MAJOR_4: { return <Major4Add />; break }
    case MAJOR_3: { return <Major3Add />; break }
    case MAJOR_2: { return <Major2Add />; break }
    case EMBERTON: { return <EmbertonAdd />; break }
    case KULBURN: { return <KulburnAdd />; break }
    case MID_ANC: { return <MinANCAdd />; break }
  }
}




export const DevicePage = observer(() => {

  const { pathname } = useLocation()
  console.log(pathname);

  const params: any = useParams()
  const devicePageId: any = parseInt(params.id)

  const device = productsList.filter((item) => { return item.id == devicePageId })[0]

  const charactersList = device.characters

  const [colorPage, setColorPage] = useState(0)

  const [imgList, setImgList] = useState((device.addImg ? device.addImg : [device.img]))
  const [mainImg, setMainImg] = useState(imgList[colorPage][0])

  useEffect(() => {
    setMainImg(imgList[colorPage][0])
  }, [colorPage])


  const [color, setColor] = useState(device.color[0])

  const [favorite, setFavorite] = useState(false)
  const [basket, setBasket] = useState(false)

  useEffect(() => {
    if (FavoritesStore.FAVORITES_LIST.filter((item: number) => { return item === device.id }).length) setFavorite(true)
  }, [favorite])

  useEffect(() => {
    if (BasketStore.BASKET_LIST.filter((item: number) => { return item === device.id }).length) setBasket(true)
  }, [basket])


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='content'>
        <div className={styles.deviceBanner}>
          <div className={styles.rightSide}>
            <div className={styles.rightSide_nameBlock}>
              <h1> {ucFirst(device.brand)} {device.name} {ucFirst(color)} </h1>
              <p> {device.info.bigDescription} </p>
            </div>
            <div className={styles.rightSide_colorANDprice}>
              <div className={styles.colorANDprice_color}>
                Цвет:
                {device.color.map((item, index) =>
                  <div onClick={() => { setColor(item); setColorPage(index) }} key={item} className={color === item ? classNames(styles.color_out, styles.color_out_active) : styles.color_out}>
                    <span style={{ backgroundColor: chooseColor(item) }} className={styles.color_in}></span>
                  </div>
                )}
              </div>
              <div className={styles.colorANDprice_price}>

                <p>
                  <span> {device.oldPrice ? device.oldPrice + '₽' : ''}  </span>
                  {device.price}₽
                </p>
              </div>
            </div>
            <div className={styles.rightSide_buttonsBlock}>
              <div><InvertBtn onClick={() => { setBasket(!basket); return (basket ? BasketStore.removeBasketId(device.id) : BasketStore.addBasketId(device.id)) }} className={basket ? 'br-32 let-spacing-01 bg-color_white' : 'br-32 let-spacing-01'}> {basket ? 'В корзине' : 'В корзину'} </InvertBtn></div>
              <div><InvertBtn onClick={() => { setFavorite(!favorite); return (favorite ? FavoritesStore.removeFavoriteId(device.id) : FavoritesStore.addFavoriteId(device.id)) }} className={favorite ? 'br-32 let-spacing-01 bg-color_white' : 'br-32 let-spacing-01'} > {favorite ? 'В избранном' : 'В избранное'} </InvertBtn></div>
            </div>
          </div>
          <div className={styles.leftSide}>
            <div>
              <div className={styles.img_main} > <img src={mainImg} alt="" /> </div>
              <div className={styles.img_swiper}>
                {imgList[colorPage].map((item: string) =>
                  <div onClick={() => setMainImg(item)} key={item} className={(item == mainImg ? classNames(styles.img_swiped, styles.img_active) : styles.img_swiped)} >
                    <img src={item} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.add_block}>
          {whatDevice(device.name)}
        </div>
        <div className={styles.characters}>
          <h2 className={styles.technical_characters_h2}> ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ </h2>
          <div className={styles.technical_characters}>
            {charactersList.map((character) =>
              <div className={styles.characters_wrapper}>
                <h3> {character.header} </h3>
                {character.info.map((infoItem) =>
                  <div className={styles.characters_item}>
                    <p className={styles.item_h}> {infoItem.header} : </p>
                    <p> {infoItem.content} </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );

})