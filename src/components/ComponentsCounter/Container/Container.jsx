import React from 'react'
import Main from '../Main/Main'
import styles from './Container.module.css'
import Display from '../Display/Display'
import Button from '../Button/Button'
import { GiConfirmed } from "react-icons/gi";

export default function Container() {
  const link = "https://api.whatsapp.com/send/?phone=5521976618713&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+na+Festa+da+Jennyni.+Dia+02+de+Junho%2C+%C3%A0s+20h.+Nome+Completo%3A&type=phone_number&app_absent=0"
  return (
    <>
    <div className={styles.container}>
        <Main/>
    </div>
    </>
  )
}
