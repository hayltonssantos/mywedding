import Background from '../../components/ComponentsCounter/Background/Background'
import Button from '../../components/ComponentsCounter/Button/Button';
import Container from '../../components/ComponentsCounter/Container/Container'
import React, { useContext, useState } from 'react';
import styles from './Confirm.module.css'
import { InvitedContext } from '../../context/invited';
import { FcInvite } from "react-icons/fc";
import Input from '../../components/Input/Input';


function Confirm() {
  const Status = [
    {'id': 0,
      'type': 'Presença'
    },
    {'id': 2,
      'type': 'Confirmado'
    },
    {'id': 3,
      'type': 'Não confirmado'
    },
  ]

 const {confirmGuest} = useContext(InvitedContext)
 const [name, setName] = useState("")
 const [lastName, setLastName] = useState("")
 const [status, setStatus] = useState("")
 const linkWpp = `https://api.whatsapp.com/send/?phone=351964337343&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+no+Casamento+de+Camile+e+Haylton.+Dia+12+de+Outubro%2C+%C3%A0s+15:30h.+${name}+${lastName}%3A&type=phone_number&app_absent=0`
 return (
    <div className="App">
      <div>
        <Background/>
        <Container enableMiddle={false} enableBottom={false} color={''}/>
      </div>
      <div>
        <Input type='text' placeholder={"Nome"} onChange={setName}/>
        <Input type='text' placeholder={"Ultimo Nome"} onChange={setLastName}/>
        <div className={styles.statusBox}>
          <div>
            <label for="status"></label>
            <select className={styles.status} onChange={(e) => setStatus(e.target.value)} name="status" id="status">
              {Status.map((stt) => (
                <option value={stt.type}>{stt.type.toUpperCase()}</option>
              ))}
            </select>
            </div>
          </div>
      </div>
      <div className={styles.containerButtons}>
        <Button action={(e) => confirmGuest(name, lastName, status)} link={linkWpp} navigate={'#counter'} text={'Confirm'} target='_self'>
          <FcInvite style={{color: 'white', fontSize: '100px'}}/>
        </Button>
      </div>
    </div>
  );
}

export default Confirm;
