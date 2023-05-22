import React, { useEffect, useState } from 'react';
import styles from './catalog.css';
import major4_bl from '../../public/img/major_4_nofon.png'
import major4_bl_1 from '../../public/img/major4_bl_1.png'
import major4_bl_2 from '../../public/img/major4_bl_2.png'
import major4_bl_3 from '../../public/img/major4_bl_3.png'
import major4_br from '../../public/img/major4_br.png'
import major4_br_1 from '../../public/img/major4_br_1.png'
import major4_br_2 from '../../public/img/major4_br_2.png'
import major4_br_3 from '../../public/img/major4_br_3.png'
import emberton_1 from '../../public/img/emberton_nofon.png'
import major3_wh from '../../public/img/major3_wh.png'
import major2_br from '../../public/img/major2_br.png'
import mid_anc from '../../public/img/midANC.png'
import kublurn from '../../public/img/kulburn.png'
import CatalogProdCard from '../CatalogProdCard/CatalogProdCard';
import classnames from 'classnames'

export const productsList = [
  {
    id: 110101, type: 'headset', brand: 'marshall', name: 'Major IV', description: 'БОЛЕЕ 30 ЧАСОВ БЕСПРОВОДНОГО ЗВУЧАНИЯ', price: 12990, img: major4_bl, color: ['black', 'brown'],
    info: {
      bigDescription: 'Культовые наушники от Marshall с более чем 80 часами беспроводного воспроизведения, беспроводной зарядкой и новым улучшенным эргономичным дизайном.',
    },
    addImg: [[major4_bl_1, major4_bl_2, major4_bl_3], [major4_br_1, major4_br_2, major4_br_3]],
    characters: [
      {
        header: 'АУДИО ХАРАКТЕРИСТИКИ',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Тип излучателей', content: 'Динамические' },
          { header: 'Импенданс', content: '32 Ω' },
          { header: 'Динамики', content: '40 мм' },
        ]
      },
      {
        header: 'БАТАРЕЯ',
        info: [
          { header: 'Время автономной работы', content: 'до 8 часов' },
          { header: 'Время зарядки', content: '3 часа до полной зарядки' },
          { header: 'Беспроводная зарядка', content: 'Поддерживается' },
          { header: 'В комплекте', content: `Наушники Major IV Bluetooth, \n Зарядный кабель USB-С, \n Соединительный аудио кабель, \n Руководство пользователя` },
        ]
      },
      {
        header: 'УПРАВЛЕНИЕ ПОДКЛЮЧЕНИЕМ',
        info: [
          { header: 'Проводное подключение', content: 'jack 3.5 мм' },
          { header: 'Дальность Bluetooth', content: '10м' },
          { header: 'Кнопка управления', content: 'Есть' },
          { header: 'Беспроводное подключение', content: 'Bluetooth 5.0' },
        ]
      },
    ]
  },
  {
    id: 110102, type: 'headset', brand: 'marshall', name: 'Major III', description: 'БОЛЕЕ 30 ЧАСОВ БЕСПРОВОДНОГО ЗВУЧАНИЯ', price: 10590, oldPrice: 12990, img: major3_wh, color: ['black', 'brown', 'white'],
    info: {
      bigDescription: 'Major III Bluetooth предоставляет вам свободу и удобство использования беспроводной технологии Bluetooth AptX и более 30 часов беспроводного воспроизведения после одной зарядки устройства.',
    },
    addImg: [[major3_wh, major3_wh, major3_wh], [major3_wh, major3_wh, major3_wh], [major3_wh, major3_wh, major3_wh]],
    characters: [
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
    ]
  },
  {
    id: 110103, type: 'headset', brand: 'marshall', name: 'Major II', description: 'БОЛЕЕ 20 ЧАСОВ БЕСПРОВОДНОГО ЗВУЧАНИЯ', price: 8590, oldPrice: 10990, img: major2_br, color: ['black', 'brown', 'white'],
    info: {
      bigDescription: 'Обновленный звук, внешний вид, качество, улучшенная эргономика, все это перенесет Вас на совершенно новый уровень прослушивания музыки. Благодаря гибкой конструкции Major II садиться лучше, чем когда-либо.',
    },
    addImg: [[major2_br, major2_br, major2_br], [major2_br, major2_br, major2_br], [major2_br, major2_br, major2_br]],
    characters: [
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
    ]
  },
  {
    id: 110104, type: 'headset', brand: 'marshall', name: 'MID A.N.C', description: 'НАУШНИКИ С ШУМОПОДАВЛЕНИЕМ', price: 12590, img: mid_anc, color: [''],
    info: {
      bigDescription: 'MID A.N.C. – это наушники с активным шумоподавлением и технологией Bluetooth aptX. Они предлагают вам до 20 часов беспроводного воспроизведения.',
    },
    addImg: [[mid_anc, mid_anc, mid_anc]],
    characters: [
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
    ]
  },
  {
    id: 120101, type: 'acoustic', brand: 'marshall', name: 'Emberton', description: 'С 20+ ЧАСАМИ ПОРТАТИВНОГО ВРЕМЕНИ', price: 11990, oldPrice: 13990, img: emberton_1, color: [''],
    info: {
      bigDescription: 'Emberton – это компактная портативная колонка с громким и ярким звуком. Наслаждайтесь абсолютным звуком на все 360 °, где каждая точка – это золотая середина. Более чем с 20 часами воспроизведения вы можете наслаждаться превосходным звуком Marshall.',
    },
    addImg: [[emberton_1, emberton_1, emberton_1]],
    characters: [
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
    ]
  },
  {
    id: 120102, type: 'acoustic', brand: 'marshall', name: 'Kulburn', description: 'РАЗНОНАПРАВЛЕННЫЙ ЗВУК', price: 24990, img: kublurn, color: ['black', 'grey', 'brown'],
    info: {
      bigDescription: 'Kilburn II является самой громкой колонкой в своем классе. Она воспроизводит четкие средние частоты, глубокие басы и расширенные высокие частоты, не имеющие себе равных для колонок такого размера, а ее разнонаправленное звучание погрузит вас в музыку как в помещении, так и на улице.',
    },
    addImg: [[kublurn, kublurn, kublurn]],
    characters: [
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
      {
        header: 'Audio',
        info: [
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
          { header: 'Диапазон частот', content: '20-20 000 Гц' },
        ]
      },
    ]
  },
]


export function Catalog() {

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
