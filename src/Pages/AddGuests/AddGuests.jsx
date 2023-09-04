import React, { useEffect, useState, useContext } from 'react'
import styles from './AddGuests.module.css'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom';
import { getFirestore,addDoc, collection, onSnapshot, query, updateDoc, setDoc, doc } from 'firebase/firestore'
import firebaseApp from '../../../services/firebase'
import { InvitedContext } from '../../context/invited';

export default function AddGuests() {
  
  const [name, setName] = useState()
  const [lastName, setlastName] = useState()
  const [age, setAge] = useState()
  const [status, setStatus] = useState()
  const db = getFirestore(firebaseApp)

  const {addGuest} = useContext(InvitedContext)

  const Ages = [
    {'id': 0,
      'type': ''
    },
    {'id': 2,
      'type': 'child'
    },
    {'id': 3,
      'type': 'adult'
    },
  ]

  const Status = [
    {'id': 0,
      'type': ''
    },
    {'id': 2,
      'type': 'maybe'
    },
    {'id': 3,
      'type': 'confirmed'
    },
    {'id': 4,
      'type': 'unconfirmed'
    },
  ]
  
  return (
    <div className='App'>
      <div className={styles.grid}>
        <header className={styles.header}>
          <h1 className={styles.title}>Add Guests</h1>
        </header>
        <div>
          <Input type='text' onChange={setName} placeholder={'Name'}/>
        </div>
        <div>
         <Input type='text' onChange={setlastName} placeholder={'Last Name'}/>
        </div>
        <div className={styles.ageBox}>
          <div>
            <label for="ages">Age </label>
            <select className={styles.age} onChange={(e) => setAge(e.target.value)} name="ages" id="ages">
              {Ages.map((age) => (
                <option value={age.type}>{age.type.toUpperCase()}</option>
              ))}
            </select>
            </div>
          </div>
          <div className={styles.statusBox}>
          <div>
            <label for="status">Status </label>
            <select className={styles.status} onChange={(e) => setStatus(e.target.value)} name="status" id="status">
              {Status.map((stt) => (
                <option value={stt.type}>{stt.type.toUpperCase()}</option>
              ))}
            </select>
            </div>
          </div>
        <div>  
          <button onClick={(e) => addGuest('0', name, lastName, age.toLowerCase(), status.toLowerCase())}>Add</button>
          <button onClick={(e) => addGuest('1', name, lastName, age.toLowerCase(), status.toLowerCase())}>Add and continue</button>
        </div>
      </div>
    </div>
  )
}
