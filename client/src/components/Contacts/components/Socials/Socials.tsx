import React from 'react';
import styles from './socials.css';

export function Socials() {
  return (
    <div>
      <h2 className='title_exo2_contacts'>Написать нам:</h2>
      <div className={styles.socials_wrapper} >
        <div id={styles.socials_telegram} className={styles.socials__wrapper_item}><a href="">Telegram</a></div>
        <div id={styles.socials_whatsapp} className={styles.socials__wrapper_item}><a href="">WhatsApp</a></div>
        <div id={styles.socials_email} className={styles.socials__wrapper_item}><a href="">EMail</a></div>
      </div>
    </div>
  );
}
