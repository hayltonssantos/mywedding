import React from 'react';
import styles from './CardTwo.module.css';
import um from '../../Pages/Presents/Data/Photos/1.jpg';
import dois from '../../Pages/Presents/Data/Photos/2.jpg';
import tres from '../../Pages/Presents/Data/Photos/3.jpg';
import quatro from '../../Pages/Presents/Data/Photos/4.jpg';
import cinco from '../../Pages/Presents/Data/Photos/5.jpg';
import seis from '../../Pages/Presents/Data/Photos/6.jpg';
import sete from '../../Pages/Presents/Data/Photos/7.jpg';
import oito from '../../Pages/Presents/Data/Photos/8.jpg';
import nove from '../../Pages/Presents/Data/Photos/9.jpg';
import dez from '../../Pages/Presents/Data/Photos/10.jpg';
import onze from '../../Pages/Presents/Data/Photos/11.jpg';
import doze from '../../Pages/Presents/Data/Photos/12.jpg';

export default function CardsTwo({img, type = '', title = '', price = '', tech, link }) {

  const changePhoto = () =>{
    switch (img){
      case 1 : return um;
      case 2 : return dois;
      case 3 : return tres;
      case 4 : return quatro;
      case 5 : return cinco;
      case 6 : return seis;
      case 7 : return sete;
      case 8 : return oito;
      case 9 : return nove;
      case 10 : return dez;
      case 11 : return onze;
      case 12 : return doze;
      default: return '';
    }
  }

  const prices = String(price);
  const parts = prices.split('.');
  const parteInteira = parts[0];
  const parteDecimal = parts[1];

  return (
    <section>

    <div className={type === 'newCard' ? styles.card : styles.card}>
      <div className={styles.divTitle}>
        <div
          className={styles.mouse}
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2)), url(${changePhoto(img)})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          ></div>
      </div>
      {type !== 'newCard' ? (
        <div className={styles.contentBox}>
          <h3 style={{margin:'0'}}>{title}</h3>
          
          <h2 className={styles.price} style={{margin:'0'}}>
            {parteInteira}<small>{parteDecimal}</small>
          </h2>
          <a href={link} key={title} className={styles.buy}>
            Buy Now
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
      </section>
  );
}
