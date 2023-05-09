import React, { useRef } from 'react';
import { Advantages } from '../../components/Advantages/Advantages';
import { Banner } from '../../components/Banner/Banner';
import { Catalog } from '../../components/Catalog/Catalog';
import { Contacts } from '../../components/Contacts/Contacts';
import { Header } from '../../components/Header';
import { MarketOffers } from '../../components/MarketOffers/MarketOffers';
import styles from './shop.css';


export function Shop() {
  

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
    </div>
  );
}
