import React from "react"
import styles from './Background.module.css'
import flowers from '../../../assets/flowers.png'
import wheat from '../../../assets/wheat.png'
import details from '../../../assets/details.png'

export default function Background(){
    return (
        <div className={styles.background}>
            <img src={flowers} className={styles.flowers}></img>
            <img src={wheat} className={styles.wheat}></img>
            <img src={details} className={styles.details}></img>
        </div>
    )
}