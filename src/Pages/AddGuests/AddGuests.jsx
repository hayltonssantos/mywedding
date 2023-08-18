import React, { useEffect, useState } from 'react'
import styles from './AddGuests.module.css'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'
import { Button } from 'react-bootstrap'

export default function AddGuests() {
  
  const status = [
    "confirmed", "unconfirmed","maybe"
  ]

  const [name, setName] = useState()
  const [lastName, setlastName] = useState()
  const [age, setAge] = useState()
  
  return (
    <div className='App'>
      <div className={styles.grid}>
        <header className={styles.header}>
          <h1 className={styles.title}>Add Guests</h1>
        </header>
        <p>
          <Input type='text' onChange={setName} placeholder={'Name'}/>
        </p>
        <p>
         <Input type='text' onChange={setlastName} placeholder={'Last Name'}/>
        </p>
        <p className={styles.age}>
          <Dropdown/>
        </p>
       
      </div>
    </div>
  )
}
