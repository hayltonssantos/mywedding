import React from 'react';
import Background from '../../components/ComponentsCounter/Background/Background';
import styles from './Mbway.module.css';
import paypalPhoto from '../../assets/paypal.png';
import Button from '../../components/ComponentsCounter/Button/Button'
import { IoMdArrowRoundBack } from "react-icons/io";

export default function MbWay() {
  return (
    <div className={styles.infor}>
      <div className={styles.texts}>
        <h3>Não tivemos ideias de presentes para sugerir  </h3>
        <h3>&nbsp;e se você não for criativo que nem a gente, aqui está o nosso pix!</h3>
      </div>
      <Background bgflowers={false} />
      <div className={styles.paypal}>
        <h1>PayPal</h1>
        <img src={paypalPhoto} alt="PayPal" />
      </div>

      <div className={styles.others}>
        <div className={styles.divP}>
          <h1>IBAN</h1>
          <p>PT50001000006078482000145</p>
        </div>
        <div className={styles.divP}>
          <h1>MbWay</h1>
          <p>+351 913 718 027</p>
        </div>
        <div className={styles.divP}>
          <h1>Pix</h1>
          <p>21 9 7516 9316</p>
        </div>
        <div className={styles.butt}>
          <Button text='Voltar' textColor='Black' link='/presents' target='_self'>
            <IoMdArrowRoundBack />
          </Button>
        </div>
      </div>
    </div>
  );
}
