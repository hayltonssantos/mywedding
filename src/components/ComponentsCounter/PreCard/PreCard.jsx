import React, { Children, useEffect, useState } from 'react'
import styles from './PreCard.module.css'
import photo1 from '../../../data/1.jpg'
import photo2 from '../../../data/2.jpg'
import photo3 from '../../../data/3.jpg'
import photo4 from '../../../data/4.jpg'

export default function PreCard(props) {

    const [isHover, setIsHover] = useState();

    const handleMouseEnter = () =>{ setIsHover(true) }
    const handleMouseLeave = () =>{ setIsHover(false) }
    
    function hover(number){ 
        if (number === 1){
            return photo1
        }
        if (number === 2){
            return photo2
        }
        if (number === 3){
            return photo3
        }
        if (number === 4){
            return photo4
        }
    }
  return (
    <div className={styles.preCard} 
        style={isHover ? {
          background: `url(${hover(props.numberPhoto)}) no-repeat  center`,
          backgroundSize: 'cover',
          transition: '2s',
          zIndex: '4',
          width: '150px'
      } : {}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {props.children}
    </div>
  )
}
