import React from 'react';
import Background from '../../components/ComponentsCounter/Background/Background';
import CardTwo from '../../components/CardTwo/CardTwo';
import jsonData from './Data/Cards.json';
import styles from './Presents.module.css'
import o from '../../Pages/Presents/Data/Photos/1.jpg'

export default function Presents() {
  return (
    <section className='App'>
      <div className={styles.cards}>
        {jsonData.map((item, index) => (
          <CardTwo
            key={index}
            img={index+1}
            title={item.title}
            price={item.price}
          />
          ))}
      </div>
    </section>
  );
}
