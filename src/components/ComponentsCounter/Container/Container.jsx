import React from 'react'
import Main from '../Main/Main'
import styles from './Container.module.css'


export default function Container({color, enableTop, enableMiddle, enableBottom, enableDate}) {
  return (
    <>
    <div className={styles.container}>
        <Main enableTop={enableTop} enableMiddle={enableMiddle} enableBottom={enableBottom} enableDate={enableDate} color={color}/>
    </div>
    </>
  )
}
