import React from 'react'
import styles from './Button.module.css'
import {Navigate, Link} from 'react-router-dom'

export default function Button({text, link, children, action, target = '_blank', navigate = '' }) {
  if (navigate === '') {
    return (
      <div className={styles.containerButton}>
      <a className={styles.a} href={link} target={target}>
        <button className={styles.button} onClick={action}>
          {children}
        </button>
        
      </a>
        <h1 className={styles.textButton}>{text}</h1>  
      </div>
    )
  }else{
    return (
      <div className={styles.containerButton}>
      <Link className={styles.a} to={navigate}>
        <button className={styles.button} onClick={action}>
          {children}
        </button>
      </Link>
        <h1 className={styles.textButton}>{text}</h1>  
      </div>
    )
  }
}
