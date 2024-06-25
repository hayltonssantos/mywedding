import React, { useContext } from 'react'
import {CgLoadbar} from 'react-icons/cg'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import style from './GuestsInvited.module.css'
import { InvitedContext } from '../../context/invited'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function GuestsInvited({name = 'null', lastName = 'null', status = 'black', age}) { 
  const {deleteGuest} = useContext(InvitedContext)
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const getColorForStatus = (status) =>{
    switch (status){ 
        case 'confirmed': return 'green'
        case 'unconfirmed': return 'red'
        case 'maybe': return 'darkOrange'
        case 'remove': return 'purple'
    }
   }  
  
  const editGuestInv = (name, lastName) =>{
    const searchId = (name+'_'+lastName).toLowerCase()
    setSearchParams({ q: searchId });
    navigate(`/addguests?q=${encodeURIComponent(searchId)}`);
  }
  
  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style}>
            <CgLoadbar style={{color:getColorForStatus(status) ,fontSize: '35px'}}/>
        </span>
        <span className={style.name} key={name} id={'name'}> 
          {name} {lastName}
        </span>
      </div>
        <div className={style.trash}>
          <span onClick={(e) => editGuestInv(name, lastName)} className={style.trash}>
            <BsFillPencilFill  style={{color:'black' ,fontSize: '15px'}}/>
          </span>
          <span onClick={(e) => deleteGuest(name, lastName)} className={style.trash}>
            <BsFillTrashFill  style={{color:'black' ,fontSize: '15px'}}/>
          </span>
        </div>
    </div>
  )
}
