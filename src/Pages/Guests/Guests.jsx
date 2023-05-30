import React from 'react'
import styles from './Guests.module.css'
import useCountdown from '../../components/ComponentsCounter/Counter/Counter'
import Input from '../../components/Input/Input'

export default function addGuests() {
  const [day, hour, minute, second] = useCountdown('2024-10-21')
  return (
    <div className='App'>
      <header className={styles.header}>
        <h1>Guests List</h1>
        <span>Faltam {day} dias!</span>
      </header>

      <section>
        <Input type={'text'} onChange={('')} placeholder={'Nome'}></Input>
        <Input type={'Number'} onChange={('')} placeholder={'Idade'}></Input>
      </section>
    </div>
  )
}
