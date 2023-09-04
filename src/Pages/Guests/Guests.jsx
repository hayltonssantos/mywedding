import React, { useEffect, useState } from 'react'
import styles from './Guests.module.css'
import useCountdown from '../../components/ComponentsCounter/Counter/Counter'
import Card from '../../components/Card/Card.jsx'
import GuestsInvited from '../../components/GuestsInvited/GuestsInvited'
import {BsFillPeopleFill, BsFillPersonFill, BsFillCircleFill} from 'react-icons/bs'
import {MdChildFriendly} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import firebaseApp from '../../../services/firebase'
import { getFirestore,addDoc, collection, onSnapshot, query } from 'firebase/firestore'


export default function Guests() {
  const [day, hour, minute, second] = useCountdown('2024-10-21')
  const [invited, setInvited] = useState("")
  const [inviteds, setInviteds] = useState([])
  

/*   const inviteds = [
    {
        name: 'Haylton Santos',
        status: 'confirmed',
        age: 'adult'

    },
    {
        name: 'Jennyni Alves',
        status: 'unconfirmed',
        age: 'child'
    },
    {
        name: 'Elisabeth Souza',
        status: 'maybe',
        age: 'adult'
    },
    {
        name: 'Camile Manzoli',
        status: 'unconfirmed',
        age: 'adult'
    },

] */ 

function getInformation(group){
  let adult = 0
  let child = 0
  let confirmed = 0
  let unconfirmed = 0
  let maybe = 0
  inviteds.map((invited) =>{
    if (invited.age === 'adult') adult = adult + 1
    if (invited.age === 'child') child = child + 1
    if (invited.status === 'confirmed') confirmed = confirmed + 1
    if (invited.status === 'unconfirmed') unconfirmed = unconfirmed + 1
    if (invited.status === 'maybe') maybe = maybe + 1
  })
  if (group === 'adult') return adult
  if (group === 'child') return child
  if (group === 'confirmed') return confirmed
  if (group === 'unconfirmed') return unconfirmed + maybe
}
  
  useEffect(()=>{
    const q = query(collection(db,'inviteds'))

    onSnapshot(q,(querySnapshot)=>{
      const aux = []
      querySnapshot.forEach((doc)=>{
        console.log(doc.id, doc.data)

        aux.push({
          id:doc.id,
          ...doc.data()
        })

      })
      setInviteds([...aux])
    })
  }, [])

  const db = getFirestore(firebaseApp)

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
          <Card link={'/addguests'} cursor={'pointer'} color={'#8c3f0d'} title={'Adicionar Convidados'} text={''}>
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
         { inviteds.map((invited) => <GuestsInvited key={invited.name} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>)}
        </section>
      </div>
    </div>
  )
}
