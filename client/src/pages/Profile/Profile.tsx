import React from 'react';
import { Contacts } from '../../components/Contacts/Contacts';
import { Header } from '../../components/Header';
import { OffersHistory } from './components/OffersHistory/OffersHistory';
import { ProfileBlock } from './components/ProfileBlock';
import styles from './profile.css';
import UserStore from '../../store/UserStore';
import { ScrollRestoration } from 'react-router-dom';


export function Profile() {
  return (
    <div>
      <header className='pageHeader'>
        <Header />
      </header>
      <div className='content'>
        <ProfileBlock User={UserStore.user} />
        <OffersHistory />
        <Contacts />
      </div>
      <ScrollRestoration />
    </div>
  );
}
