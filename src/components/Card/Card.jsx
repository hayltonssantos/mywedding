import React from 'react'
import styles from './Card.module.css'

export default function Card({title,text,children, color = '', cursor = 'default',link}) {
  return (
    <>
        <a href={link} className={styles.card} style={{backgroundColor: `${color}`, 
                                            borderColor:`${color}`,
                                            cursor:`${cursor}`}}>
            <div className={styles.icon}>
                {children}
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.counter}>{text}</p>
        </a>     
    </>
  )
}
