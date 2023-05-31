import React from 'react';
import UserStore from '../../store/UserStore';
import { Form } from './components/Form/Form';
import { Socials } from './components/Socials/Socials';
import styles from './contacts.css';

interface contactsInterface {
  [propKey:string]:any,
}



export function Contacts({ ...props } : contactsInterface) {
  return (
    <div {...props} className={styles.contacts__wrapper}>
      <Form />
      <Socials />
    </div>
  );
}
