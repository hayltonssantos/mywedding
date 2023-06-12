import React from 'react'
import styles from './Card.module.css'

export default function Card({title,text,children, color = '', cursor = 'default'}) {
  return (
    <>
        <div className={styles.card} style={{backgroundColor: `${color}`, 
                                            borderColor:`${color}`,
                                            cursor:`${cursor}`}}>
            <div className={styles.icon}>
                {children}
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.counter}>{text}</p>
        </div>     
    </>
  )
}
