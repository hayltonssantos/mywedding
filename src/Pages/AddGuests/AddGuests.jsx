import React, { useEffect, useState } from 'react'
import styles from './AddGuests.module.css'
import Input from '../../components/Input/Input'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function AddGuests() {
  
  const status = [
    "confirmed", "unconfirmed","maybe"
  ]

  const [name, setName] = useState()
  const [age, setAge] = useState()
  
  return (
    <div className='App'>
      <header className={styles.header}>
        <h1 className={styles.title}>Add Guests</h1>
      </header>
      <div className={styles.container}>
        <Input type='text' onChange={setName} placeholder={'Nome'}/>
        <Input type='text' onChange={setName} placeholder={'Apelido'}/>
        <Dropdown/>
      </div>
    </div>
  )
}
