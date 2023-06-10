import classNames from 'classnames';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import { ucFirst } from '../..';
import { Header } from '../../components/Header';
import { fetchBrands } from '../../http/brandsAPI';
import { fetchDevices, fetchOneDevice } from '../../http/deviceAPI';
import { fetchTypes } from '../../http/typesAPI';
import BasketStore from '../../store/BasketStore';
import BrandsStore from '../../store/BrandsStore';
import DeviceStore from '../../store/DeviceStore';
import FavoritesStore from '../../store/FavoritesStore';
import TypesStore from '../../store/TypesStore';
import InvertBtn from '../../UI/InvertBtn/InvertBtn';
import { API_URL, COLOR_BLACK, COLOR_BROWN, COLOR_GREY, COLOR_WHITE, EMBERTON, KULBURN, MAJOR_2, MAJOR_3, MAJOR_4, MID_ANC, PAGE_BLACK, PAGE_BROWN, PAGE_GREY, PAGE_WHITE } from '../../utils/consts';
import styles from './devicepage.css';
import EmbertonAdd from './EmbertonAdd/EmbertonAdd';
import KulburnAdd from './KulburnAdd/KulburnAdd';
import Major2Add from './Major2Add/Major2Add';
import Major3Add from './Major3Add/Major3Add';
import Major4Add from './Major4Add/Major4Add';
import MinANCAdd from './MidANCAdd/MinANCAdd';

function chooseColor(nativeColor) {
  switch (nativeColor) {
    case COLOR_BLACK: { return PAGE_BLACK; break }
    case COLOR_BROWN: { return PAGE_BROWN; break }
    case COLOR_GREY: { return PAGE_GREY; break }
    case COLOR_WHITE: { return PAGE_WHITE; break }
  }
}

function whatDevice(deviceName) {
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

  const params = useParams()
  const devicePageId = parseInt(params.id)
  const [isLoading, setIsLoading] = useState(true)
  const [device, setDevice] = useState({info: [{}], colors:[{}], paged_device:[{}], images_for_color: [{}]})

  useEffect(() => {
    fetchOneDevice(devicePageId).then(data => setDevice(data))
    setIsLoading(false)
  }, [])

  const sortColorImagesFn = (images) => {
    console.log(images)
  }
  
  const [colorPage, setColorPage] = useState('')
  const [imgList, setImgList] = useState(([[{img: '', color: colorPage}]]))
  const [mainImg, setMainImg] = useState('')

  useEffect(() => {
    console.log(device);
    setImgList(device.images_for_color)
    setMainImg(API_URL + device.images_for_color[0].img)
    setColorPage(device.colors[0].color)
    // sortColorImagesFn(device.images_for_color)
  }, [device])

  // const productsList = toJS(DeviceStore.devices)
  
  useEffect(() => {
    if (colorPage !== '') {
      setMainImg( API_URL + imgList.filter(({color}) => color === colorPage)[0].img)
    }
  }, [colorPage])


  // console.log(productsList)

  // const device = productsList.filter((item) => { return item.id == devicePageId })[0]
  // console.log(device);

  const charactersList = device.info
  




  
  const [color, setColor] = useState(device.colors[0])
  const [favorite, setFavorite] = useState(false)
  const [basket, setBasket] = useState(false)

  useEffect(() => {
    if (FavoritesStore.FAVORITES_LIST.filter((item) => { return item === device.id }).length) setFavorite(true)
  }, [favorite])

  useEffect(() => {
    if (BasketStore.BASKET_LIST.filter((item) => { return item === device.id }).length) setBasket(true)
  }, [basket])


  if (!isLoading) {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='content'>
          <div className={styles.deviceBanner}>
            <div className={styles.rightSide}>
              <div className={styles.rightSide_nameBlock}>
                <h1> {ucFirst(device.brandName)} {device.name} {ucFirst(device.colors[0].color)} </h1>
                <p> {device.paged_device[0].bigDescription} </p>
              </div>
              <div className={styles.rightSide_colorANDprice}>
                <div className={styles.colorANDprice_color}>
                  Цвет:
                  {device.colors.map((item, index) =>
                    <div onClick={() => { setColor(item.color); setColorPage(item.color) }} key={item.id} className={color === item.color ? classNames(styles.color_out, styles.color_out_active) : styles.color_out}>
                      <span style={{ backgroundColor: chooseColor(item.color) }} className={styles.color_in}></span>
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
                  {imgList.filter(({color}) => color === colorPage).map((item) =>
                    <div onClick={() => setMainImg(API_URL + item.img)} key={item.id} className={(item.img == mainImg ? classNames(styles.img_swiped, styles.img_active) : styles.img_swiped)} >
                      <img src={API_URL + item.img} alt="" />
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
                  {charactersList.map((infoItem) =>
                    <div key={infoItem.id} className={styles.characters_item}>
                      <p className={styles.item_h}> {infoItem.title} : </p>
                      <p> {infoItem.description} </p>
                    </div>
                  )}
            </div>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    );
  }

})