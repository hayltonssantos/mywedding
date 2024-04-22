import React, { useState } from 'react';
import CardTwo from '../../components/CardTwo/CardTwo';
import jsonData from './Data/Cards.json';
import styles from './Presents.module.css'
import Display from '../../components/ComponentsCounter/Display/Display';
import useCountdown from '../../components/ComponentsCounter/Counter/Counter';

export default function Presents() {
  const [day, hour, minute] = useCountdown('2024-10-26')
  const [isHover, setIsHover] = useState();

  return (
    <>
      <section className='App'>
        <header className={styles.header}>
            <div className={styles.container}>
              <h1 className={styles.title}>Sugestão de Presentes</h1>
            </div>
        </header>
        <div className={styles.cards}>
          {jsonData.map((item, index) => (
            <CardTwo
            key={index}
            img={index+1}
            title={item.title}
            price={item.price}
            link={'/mbway'}
            />
            ))}
        </div>
      </section>
    </>
  );
}
