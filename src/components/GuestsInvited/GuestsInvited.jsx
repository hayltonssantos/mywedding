import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import style from './GuestsInvited.module.css'

export default function GuestsInvited({name = 'null', status = 'black'}) {
   const getColorForStatus = (status) =>{
    switch (status){ 
        case 'confirmed': return 'green'
        case 'unconfirmed': return 'red'
        case 'maybe': return 'yellow'
    }

   }  
  return (
    <div className={style.container}>
        <span className={style.icon}>
            <BsFillCircleFill style={{color:getColorForStatus(status) ,fontSize: '12px'}}/>
        </span>
        <span className={style.name}>{name}</span>
    </div>
  )
}
