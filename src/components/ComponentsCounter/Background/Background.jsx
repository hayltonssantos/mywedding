import React from "react"
import styles from './Background.module.css'
import flowers from '../../../assets/flowers.png'
import wheat from '../../../assets/wheat.png'
import details from '../../../assets/details.png'

export default function Background({bgflowers = true, 
                                    bgwheat = true, 
                                    bgdetails = true,
                                    opacity = '1'
                                }){
    
    const flowersbg = () => {
        if (bgflowers === true){
            return(
                <img 
                    src={flowers} 
                    className={styles.flowers}
                    style={{
                        opacity: opacity
                    }}    
                />
            )
        }
    }
    const wheatbg = () => {
        if (bgwheat === true){
            return(
                <img 
                    src={wheat} 
                    className={styles.wheat}
                    style={{
                        opacity: opacity
                    }} 
                    />
            )
        }
    }
    const detailsbg = () => {
        if (bgdetails === true){
            return(
                <img
                    src={details} 
                    className={styles.details}
                    style={{
                        opacity: opacity
                    }} 
                    />
            )
        }
    }
    
    
    return (
        <div className={styles.background}>
            {flowersbg()}
            {wheatbg()}
            {detailsbg()}
        </div>
    )
}