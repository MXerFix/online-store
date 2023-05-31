import React, { useEffect, useRef } from 'react';
import { ScrollRestoration, useLocation, useOutlet } from 'react-router-dom';
import { Advantages } from '../../components/Advantages/Advantages';
import { Banner } from '../../components/Banner/Banner';
import { Catalog } from '../../components/Catalog/Catalog';
import { Contacts } from '../../components/Contacts/Contacts';
import { Header } from '../../components/Header';
import { MarketOffers } from '../../components/MarketOffers/MarketOffers';
import styles from './shop.css';
import { createRef } from 'react'
import { authRoutes } from '../../routes';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { fetchTypes } from '../../http/typesAPI';
import TypesStore from '../../store/TypesStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';



export const Shop = observer(() => {
  
  useEffect(() => {
    fetchTypes().then(data => TypesStore.setTypes(data))
  }, [])

  
  


  return (
    <div>
      <Header />
      <div className='content'>
        <Banner />
        <MarketOffers />
        <Catalog />
        <Advantages />
        <Contacts id='contacts' />
      </div>
      <ScrollRestoration />
    </div>
  );
})

