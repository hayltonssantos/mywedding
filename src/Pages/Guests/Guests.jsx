import React, { useEffect, useState } from 'react'
import styles from './Guests.module.css'
import useCountdown from '../../components/ComponentsCounter/Counter/Counter'
import Card from '../../components/Card/Card.jsx'
import GuestsInvited from '../../components/GuestsInvited/GuestsInvited'
import {BsFillPeopleFill, BsFillPersonFill, BsFillCircleFill} from 'react-icons/bs'
import {MdChildFriendly} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'

export default function Guests() {
  const [day, hour, minute, second] = useCountdown('2024-10-21')
  
  const inviteds = [
    {
        name: 'Haylton Santos',
        status: 'confirmed',
        ageGroup: 'adult'

    },
    {
        name: 'Jennyni Alves',
        status: 'unconfirmed',
        ageGroup: 'child'
    },
    {
        name: 'Elisabeth Souza',
        status: 'maybe',
        ageGroup: 'adult'
    },
    {
        name: 'Camile Manzoli',
        status: 'unconfirmed',
        ageGroup: 'adult'
    },

] 

function getInformation(group){
  let adult = 0
  let child = 0
  let confirmed = 0
  let unconfirmed = 0
  let maybe = 0
  inviteds.map((invited) =>{
    if (invited.ageGroup === 'adult') adult = adult + 1
    if (invited.ageGroup === 'child') child = child + 1
    if (invited.status === 'confirmed') confirmed = confirmed + 1
    if (invited.status === 'unconfirmed') unconfirmed = unconfirmed + 1
    if (invited.status === 'maybe') maybe = maybe + 1
  })
  if (group === 'adult') return adult
  if (group === 'child') return child
  if (group === 'confirmed') return confirmed
  if (group === 'unconfirmed') return unconfirmed + maybe
}
  
  
  return (
    <div className='App'>
      <header className={styles.header}>
        <h1 className={styles.title}>Guests List</h1>
      </header>
      <div className={styles.container}>
        <section className={styles.cards}>
          <Card title={inviteds.length} text={'Convidados'}>
            <BsFillPeopleFill style={{color: 'white', fontSize: '15px'}}/>
          </Card>
          <Card title={getInformation('adult')} text={'Adultos'}>
            <BsFillPersonFill style={{color: 'white', fontSize: '15px'}}/>
          </Card>
          <Card title={getInformation('child')} text={'Crianças'}>
            <MdChildFriendly style={{color: 'white', fontSize: '15px'}}/>
          </Card>
          <Card cursor={'pointer'} color={'#8c3f0d'} title={'Adicionar Convidados'} text={''}>
            <AiOutlinePlusCircle style={{color: 'white', fontSize: '15px'}}/>
          </Card>
          <Card title={getInformation('confirmed')} text={'Confirmados'}>
            <BsFillCircleFill style={{color: 'lightGreen', fontSize: '15px'}}/>
          </Card>
          <Card title={getInformation('unconfirmed')} text={'Não confirmados'}>
            <BsFillCircleFill style={{color: 'Red', fontSize: '15px'}}/>
          </Card>
        </section>
        <section className={styles.peoplesInviteds}>
          {inviteds.map((invited) => <GuestsInvited key={invited.name} name={invited.name} status={invited.status}/>)}
        </section>
      </div>
    </div>
  )
}
