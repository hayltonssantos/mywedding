import React, { useContext, useEffect, useState } from 'react'
import styles from './Guests.module.css'
import useCountdown from '../../components/ComponentsCounter/Counter/Counter'
import Card from '../../components/Card/Card.jsx'
import GuestsInvited from '../../components/GuestsInvited/GuestsInvited'
import {BsFillPeopleFill, BsFillPersonFill, BsFillCircleFill} from 'react-icons/bs'
import {MdChildFriendly} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import firebaseApp from '../../../services/firebase'
import { getFirestore,addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import AlertDiv from '../../components/AlertDiv/AlertDiv'
import { IoIosAddCircle } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
import { ConfigsContext } from '../../context/configs.jsx'
import { CiMapPin } from "react-icons/ci";
import { MdLocalDining } from "react-icons/md";


export default function Guests() {
  const [day, hour, minute, second] = useCountdown('2024-10-21')
  const [invited, setInvited] = useState("")
  const [inviteds, setInviteds] = useState([])
  const {prices, getPrices} = useContext(ConfigsContext)
  const db = getFirestore(firebaseApp)

  const [listAll, setListAll] = useState(true)
  const [listChild, setListChild] = useState(false)
  const [listAdult, setListAdult] = useState(false)
  const [listConfirm, setListConfirm] = useState(false)
  const [listUnconfirm, setListUnconfirmed] = useState(false)
  const [listNotFound, setListNotFound] = useState(false)

function getInformation(group){
  let adult = 0
  let child = 0
  let confirmed = 0
  let unconfirmed = 0
  let maybe = 0
  let NotFound = 0
  inviteds.map((invited) =>{
    if (invited.age === 'adult') adult = adult + 1
    if (invited.age === 'child') child = child + 1
    if (invited.status === 'confirmed') confirmed = confirmed + 1
    if (invited.status === 'unconfirmed') unconfirmed = unconfirmed + 1
    if (invited.status === 'maybe') maybe = maybe + 1
    if (invited.status === 'NotFound') NotFound = NotFound + 1
  })
  if (group === 'adult') return adult
  if (group === 'child') return child
  if (group === 'confirmed') return confirmed
  if (group === 'NotFound') return NotFound
  if (group === 'unconfirmed') return unconfirmed + maybe
}
  
  useEffect(()=>{
    const q = query(collection(db,'inviteds'))

    onSnapshot(q,(querySnapshot)=>{
      const aux = []
      querySnapshot.forEach((doc)=>{
        /* console.log(doc.id, doc.data) */
        aux.push({
          id:doc.id,
          ...doc.data()
        })

      })
      setInviteds([...aux])
    })
  }, [])

  const getTotal = () =>{
    const valueAdult = parseInt(getPrices('quinta') + getPrices('catering'))
    const valueChild = parseInt((getPrices('quinta') + getPrices('catering'))/2)
    return (parseInt(valueAdult * getInformation('adult')) + (valueChild * getInformation('child')))
  }

  const getListAll = () =>{
    if (listAll === true){
      return(
        <section className={styles.peoplesInviteds}>
        { inviteds.map((invited) => <GuestsInvited key={`${invited.name}${invited.lastName}`} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>)}
       </section>
      )
    }
    if (listAdult === true){
      return(
        <section className={styles.peoplesInviteds}>
        {inviteds.map((invited) => invited.age === 'adult' ? <GuestsInvited key={`${invited.name}${invited.lastName}`} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>:'')}
       </section>
      )
    }
    if (listChild === true){
      return(
        <section className={styles.peoplesInviteds}>
        {inviteds.map((invited) => invited.age === 'child' ? <GuestsInvited key={`${invited.name}${invited.lastName}`} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>:'')}
       </section>
      )
    }
    if (listConfirm === true){
      return(
        <section className={styles.peoplesInviteds}>
        {inviteds.map((invited) => invited.status === 'confirmed' ? <GuestsInvited key={`${invited.name}${invited.lastName}`} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>:'')}
       </section>
      )
    }
    if (listUnconfirm === true){
      return(
        <section className={styles.peoplesInviteds}>
        {inviteds.map((invited) => invited.status !== 'confirmed' ? <GuestsInvited key={`${invited.name}${invited.lastName}`} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>:'')}
       </section>
      )
    }
    if (listNotFound === true){
      return(
        <section className={styles.peoplesInviteds}>
        {inviteds.map((invited) => invited.status === 'NotFound' ? <GuestsInvited key={`${invited.name}${invited.lastName}`} name={invited.name} lastName={invited.lastName} status={invited.status} age={invited.age}/>:'')}
       </section>
      )
    }
  }

  const changeList = (name) => {
    switch(name){
      case 'all':{
        setListAll(true)
        setListChild(false)
        setListAdult(false)
        console.log(`${listAdult }Adulto,${listAll} todos,${listChild} chil`)
        break
      }
      case 'adult':{
        setListAll(false)
        setListChild(false)
        setListAdult(true)
        console.log(`${listAdult }Adulto,${listAll} todos,${listChild} chil`)
        break
      }
      case 'child':{
        setListAll(false)
        setListChild(true)
        setListAdult(false)
        console.log(`${listAdult }Adulto,${listAll} todos,${listChild} chil`)
        break
      }
      case 'confirmed':{
        setListAll(false)
        setListChild(false)
        setListAdult(false)
        setListConfirm(true)
        setListUnconfirmed(false)
        break
      }
      case 'unconfirmed':{
        setListAll(false)
        setListChild(false)
        setListAdult(false)
        setListConfirm(false)
        setListUnconfirmed(true)
        break
      }
      case 'NotFound':{
        setListAll(false)
        setListChild(false)
        setListAdult(false)
        setListConfirm(false)
        setListUnconfirmed(false)
        setListNotFound(true)
        break
      }
    }
  }
  return (
    <div className='App'>
      
      <header className={styles.header}>
        <h1 className={styles.title}>Guests List</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.addGuest}>
          <a href='/addguests'>
            <IoIosAddCircle style={{color: '#8c3f0d', fontSize:'50px'}} />
          </a>
        </div>
        <section className={styles.cards}>
          <section onClick={() =>{changeList('all')}}>
            <Card title={inviteds.length} text={'Convidados'}>
              <BsFillPeopleFill style={{color: 'white', fontSize: '15px'}}/>
            </Card>
          </section>
          <section onClick={() =>{changeList('adult')}}>
            <Card title={getInformation('adult')} text={'Adultos'}>
              <BsFillPersonFill style={{color: 'white', fontSize: '15px'}}/>
            </Card>
          </section>
          <section onClick={() =>{changeList('child')}}>
            <Card title={getInformation('child')} text={'Crianças'}>
              <MdChildFriendly style={{color: 'white', fontSize: '15px'}}/>
            </Card>
          </section>
          <Card link={'/addguests'} cursor={'pointer'} color={'#8c3f0d'} title={'Adicionar Convidados'} text={''}>
            <AiOutlinePlusCircle style={{color: 'white', fontSize: '15px'}}/>
          </Card>
          <section className={styles.status}>
            <section onClick={() =>{changeList('confirmed')}}>
              <Card title={getInformation('confirmed')} text={'Confirmados'}>
                <BsFillCircleFill style={{color: 'lightGreen', fontSize: '15px'}}/>
              </Card>
            </section>
            <section onClick={() =>{changeList('unconfirmed')}}>
              <Card title={getInformation('unconfirmed')} text={'Não confirmados'}>
                <BsFillCircleFill style={{color: 'Red', fontSize: '15px'}}/>
              </Card>
            </section>
            <section onClick={() =>{changeList('NotFound')}}>
              <Card title={getInformation('NotFound')} text={'Não Encontrados'}>
                <BsFillCircleFill style={{color: 'Black', fontSize: '15px'}}/>
              </Card>
            </section>
          </section>
          <div className={styles.prices}>
            <Card title={`${getPrices('catering')}/${getPrices('catering')/2}€`} text={'Catering'} color='white' colorText='black' fontSize='0.76em' width='30px'>
              <MdLocalDining style={{color: 'Black', fontSize: '15px'}}/>
            </Card>
            <Card title={`${getPrices('quinta')}/${getPrices('quinta')/2}€`} text={'Quinta'} color='white' colorText='black' fontSize='0.76em'>
              <CiMapPin style={{color: 'Black', fontSize: '15px'}}/>
            </Card>
            <section>
              <Card title={`${getTotal()}€`} text={'Total'} color='white' colorText='black' fontSize='0.76em'>
                <FaEuroSign style={{color: 'Black', fontSize: '15px'}}/>
              </Card>
            </section>
          </div>
        </section>

       {getListAll()}
      </div>
    </div>
  )
}
