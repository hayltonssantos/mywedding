import React from 'react';
import styles from './CardTwo.module.css';
import um from '../../Pages/Presents/Data/Photos/1.jpg';
import dois from '../../Pages/Presents/Data/Photos/2.jpg';
import tres from '../../Pages/Presents/Data/Photos/3.jpg';
import quatro from '../../Pages/Presents/Data/Photos/4.jpg';
/* import cinco from '../../Pages/Presents/Data/Photos/5.jpg';
import seis from '../../Pages/Presents/Data/Photos/6.jpg';
import sete from '../../Pages/Presents/Data/Photos/7.jpg';
import oito from '../../Pages/Presents/Data/Photos/8.jpg';
import nove from '../../Pages/Presents/Data/Photos/9.jpg';
import dez from '../../Pages/Presents/Data/Photos/10.jpg';
import onze from '../../Pages/Presents/Data/Photos/11.jpg';
import doze from '../../Pages/Presents/Data/Photos/12.jpg'; */


export default function CardsTwo({img, title = '', price = '', tech, link, children }) {

const changePhoto = () =>{
  switch (img){
    case 1 : return um;
    case 2 : return dois;
    case 3 : return tres;
    case 4 : return quatro;
  }
}

  return (
    <div className={styles.card}>
      <div
        className={styles.divTitle}
        style={{
          background: `url(${changePhoto(img)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          
        }}
        
      >
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.price}>
        <p>
          {price}<span className={styles.priceCoins}>,00</span>
        </p>
      </div>
      <div className={styles.inf}>
        <a href={link} target='_blank'>
          <button className={styles.btn}>
            <span>
              Presentear
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
