import classNames from 'classnames';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import BrandsStore from '../../../../store/BrandsStore';
import TypesStore from '../../../../store/TypesStore';
import InvertBtn from '../../../../UI/InvertBtn/InvertBtn';
import styles from '../../admin.css'

export interface AddDeviceI {
  [propKey: string] :any
}

export const AddDevice = observer(({ className, cancelFn, ...props }: AddDeviceI) => {


  const types = toJS(TypesStore.types).map((item) =>
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  )

  const brands = toJS(BrandsStore.brands).map((item) =>
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  )

  const [color, setColor] = useState([{ color: 'Введите цвет', number: Date.now() }])
  const addColor = () => {
    setColor([...color, { color: 'Введите цвет', number: Date.now() }])
  }
  const deleteColor = (deleted: number) => {
    setColor(color.filter((item) => item.number !== deleted))
  }

  const [info, setInfo] = useState([{ title: 'Название', description: 'Описание', number: Date.now() }])
  const addInfo = () => {
    setInfo([...info, { title: 'Название', description: 'Описание', number: Date.now() }])
  }
  const deleteInfo = (deleted: number) => {
    setInfo(info.filter((item) => item.number !== deleted))
  }

  return (
    <div className={className}>
      <form action="" className={styles.device_add__form}>
        <div className={styles.in_form__wrapper}>
          <div className={styles.in_form__side}>
            <div className={styles.in_form__select}>
              <label htmlFor="#category_select">Категория</label>
              <select name="" id="category_select">
                {types}
              </select>
            </div>
            <div className={styles.in_form__select}>
              <label htmlFor="#brand_select">Бренд</label>
              <select name="" id="brand_select">
                {brands}
              </select>
            </div>
            <div className={styles.in_form__input}>
              <label htmlFor="">Название</label>
              <input type="text" name="deviceName" id="addDeviceForm_name" />
            </div>
            <div className={styles.in_form__input}>
              <label htmlFor="">Описание</label>
              <input type="text" name="deviceDescription" id="addDeviceForm_description" />
            </div>
            <div className={styles.in_form__input}>
              <label htmlFor="">Главное изображение</label>
              <input type="file" name="mainImg" id="" />
            </div>
            <div className={styles.in_form__input}>
              <label htmlFor="">Цена</label>
              <input type="number" name="devicePrice" id="addDeviceForm_price" />
            </div>
            <div className={styles.in_form__input}>
              <label htmlFor="">Цена без скидки</label>
              <input type="number" name="deviceOldPrice" id="addDeviceForm_oldPrice" />
            </div>
          </div>
          <div className={styles.in_form__side}>
            <div className={styles.add_bigDescription}>
              <label htmlFor="addDeviceForm_bigDescription"> Описание на странице товара </label>
              <textarea value='Эти прекрасные наушники славятся...' name="bigDescription" id="addDeviceForm_bigDescription">  </textarea>
            </div>
            <div className={styles.add_colors}>
              <label htmlFor="">Цвет</label>
              <button onClick={(e) => { e.preventDefault(); addColor(); }}>Добавить цвет</button>
              <div>
                {color.map((item) =>
                  <div key={item.number}>
                    <input type="text" placeholder={item.color} />
                    <button onClick={(e) => { e.preventDefault(); deleteColor(item.number) }} >Удалить</button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.add_infos}>
              <label htmlFor="">Характеристики</label>
              <button onClick={(e) => { e.preventDefault(); addInfo(); }}>Добавить характеристику</button>
              <div>
                {info.map((item) =>
                  <div key={item.number}>
                    <input type="text" placeholder={item.title} />
                    <input type="text" placeholder={item.description} />
                    <button onClick={(e) => { e.preventDefault(); deleteInfo(item.number) }} > Удалить </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons_box}>
          <InvertBtn onClick={cancelFn} > Отмена </InvertBtn>
          <InvertBtn> Добавить </InvertBtn>
        </div>
      </form>
    </div>
  )
})
