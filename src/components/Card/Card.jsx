import React, { Children } from 'react'
import styles from './Card.module.css'

export default function Card({title,text, children}) {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.icon}>
                {children}
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.counter}>{text}</p>
            <p className={styles.text}>Check all your favourites in one place.</p>
        </div>     
    </>
  )
}
