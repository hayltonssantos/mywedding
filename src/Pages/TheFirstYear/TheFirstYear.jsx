import React from 'react'
import Photos from '../Photos/Photos'
import styles from './TheFirstYear.module.css'
export default function TheFirstYear() {
  return (
    <div className={styles.div}>
      <div className={styles.text}>
        Atao, isto é só uma cena descontraída antes de te dar o teu presente, vai respondendo aí, pá.
      </div>
    <Photos/>
    <div className={styles.btn}>
      <button>
        <a href='/questions/1'>
          Questions
        </a>
      </button>
    </div>
    </div>
  )
}
