import React from 'react'
import {CgLoadbar} from 'react-icons/cg'
import {BsFillTrashFill} from 'react-icons/bs'
import style from './GuestsInvited.module.css'

export default function GuestsInvited({name = 'null', lastName = 'null', status = 'black', age}) { 
  const getColorForStatus = (status) =>{
    switch (status){ 
        case 'confirmed': return 'green'
        case 'unconfirmed': return 'red'
        case 'maybe': return 'darkOrange'
    }

   }  
  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style}>
            <CgLoadbar style={{color:getColorForStatus(status) ,fontSize: '35px'}}/>
        </span>
        <span className={style.name}> 
          {name} {lastName} 
        </span>
      </div>
        <div className={style.trash}>
          <span className={style.trash}>
            <BsFillTrashFill style={{color:'black' ,fontSize: '15px'}}/>
          </span>
        </div>
    </div>
  )
}
