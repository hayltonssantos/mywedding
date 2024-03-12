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


export default function CardsTwo({img, title = '', price = '', tech, link, children }) {

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
  }
}

  return (
    <div className={styles.card}>
      <div
        className={styles.divTitle}
        style={{
          background: ` linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2)), url(${changePhoto(img)})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }}
        
      >
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </div>
      
      
      <div className={styles.inf}>
        <span className={styles.price}>
              {price}<span className={styles.priceCoins}>,00</span>
            </span>
        <a href={link} target='_self'>
          <button className={styles.btnPresents}>
            <span>
              Presentear
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
