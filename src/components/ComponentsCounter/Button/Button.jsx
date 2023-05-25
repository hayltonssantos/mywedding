import React from 'react'
import styles from './Button.module.css'

export default function Button({text, link, children}) {
  return (
    <div className={styles.containerButton}>
    <a className={styles.a} href={link} target='_blank'>
      <button className={styles.button}>
        {children}
      </button>
      
    </a>
      <h1 className={styles.textButton}>{text}</h1>  
    </div>
  )
}
