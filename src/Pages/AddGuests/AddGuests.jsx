import React, { useState, useContext, useEffect } from 'react';
import styles from './AddGuests.module.css';
import Input from '../../components/Input/Input';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getFirestore } from 'firebase/firestore';
import firebaseApp from '../../../services/firebase';
import { InvitedContext } from '../../context/invited';
import AlertDiv from '../../components/AlertDiv/AlertDiv';

export default function AddGuests() {
  const { addGuest } = useContext(InvitedContext);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsNames = searchParams.get('q') ? searchParams.get('q').split('_') : [];

  const Ages = [
    { 'id': 0, 'type': '' },
    { 'id': 2, 'type': 'child' },
    { 'id': 3, 'type': 'adult' },
  ];

  const Status = [
    { 'id': 0, 'type': '' },
    { 'id': 2, 'type': 'maybe' },
    { 'id': 3, 'type': 'confirmed' },
    { 'id': 4, 'type': 'unconfirmed' },
    { 'id': 5, 'type': 'remove' },
  ];

  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  useEffect(() => {
    if (paramsNames.length === 2) {
      setName(paramsNames[0]);
      setLastName(paramsNames[1]);
    }
  }, []); // O array vazio como segundo argumento garante que o useEffect seja executado apenas uma vez após a montagem do componente

  const save = (id, name, lastName, age, status) => {
    
    toggleAlert();
    setName(capitalizeFirstLetter(name))
    setLastName(capitalizeFirstLetter(lastName))
    addGuest(id, name, lastName, age.toLowerCase(), status.toLowerCase());
    if (id == 0){
      navigate('/guests');
    }
    
  };

  function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

  return (
    <div className='App'>
      <div className={styles.grid}>
        <div className={styles.alert}>
          {showAlert && <AlertDiv text={'Success'} />}
        </div>
        <header className={styles.header}>
          <h1 className={styles.title}>Add Guests</h1>
        </header>
        <div onClick={()=>setShowAlert(false)}>
          <Input type='text' onChange={setName} placeholder={'Name'} value={capitalizeFirstLetter(name)} />
        </div>
        <div>
          <Input type='text' onChange={setLastName} placeholder={'Last Name'} value={capitalizeFirstLetter(lastName)} />
        </div>
        <div className={styles.boxs}>
          <div className={styles.ageBox}>
            <div>
              <label htmlFor='ages'>Age </label>
              <select
                className={styles.age}
                onChange={(e) => setAge(e.target.value)}
                name='ages'
                id='ages'
                value={age}
              >
                {Ages.map((age) => (
                  <option key={age.id} value={age.type}>
                    {age.type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.statusBox}>
            <div>
              <label htmlFor='status'>Status </label>
              <select
                className={styles.status}
                onChange={(e) => setStatus(e.target.value)}
                name='status'
                id='status'
                value={status}
              >
                {Status.map((stt) => (
                  <option key={stt.id} value={stt.type}>
                    {stt.type.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <button>
            <a href="/guests">Back</a>
          </button>
          <button onClick={(e) => save('0', capitalizeFirstLetter(name), capitalizeFirstLetter(lastName), age.toLowerCase(), status.toLowerCase())}>Add</button>
          <button
            onClick={(e) => save('1', capitalizeFirstLetter(name), capitalizeFirstLetter(lastName), age.toLowerCase(), status === 'notfound' ? 'NotFound' : status.toLowerCase())}
          >
            Add +1
          </button>
        </div>
      </div>
    </div>
  );
}
