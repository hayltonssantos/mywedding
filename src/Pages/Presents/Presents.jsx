import React, { useState } from 'react';
import CardTwo from '../../components/CardTwo/CardTwo';
import jsonData from './Data/Cards.json';
import styles from './Presents.module.css'
import Display from '../../components/ComponentsCounter/Display/Display';
import useCountdown from '../../components/ComponentsCounter/Counter/Counter';

export default function Presents() {
  const [day, hour, minute, second] = useCountdown('2024-10-12')
  const [isHover, setIsHover] = useState();

  return (
    <>
      <section className='App'>
        <header className={styles.header}>
            <h1 className={styles.title}>Sugestão de Presentes</h1>
            <div className={styles.container}>
              <section>
                <Display style='nameBox' text={day}/>
                <Display style='nameBox' text='Days' />
              </section>
              <section>
                <Display style='nameBox' text={hour}/>
                <Display style='nameBox' text='Hour' />
              </section>
              <section>
                <Display style='nameBox' text={minute}/>
                <Display style='nameBox' text='Min' />
              </section>
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
