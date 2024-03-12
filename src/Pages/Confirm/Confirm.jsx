import Background from '../../components/ComponentsCounter/Background/Background'
import Button from '../../components/ComponentsCounter/Button/Button';
import Container from '../../components/ComponentsCounter/Container/Container'
import React, { useContext, useState } from 'react';
import styles from './Confirm.module.css'
import { InvitedContext } from '../../context/invited';
import { FcInvite } from "react-icons/fc";
import Input from '../../components/Input/Input';
import {Navigate, Link} from 'react-router-dom'
import Confirmation from '../../components/Confirmation/Confirmation';


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
 const linkWpp = `https://api.whatsapp.com/send?phone=351964337343&text=Ol%C3%A1%2C%20Eu:%20${name}%20${lastName}%20${status === 'Não confirmado' ? 'não':''}%20confirmo%20minha%20presen%C3%A7a%20no%20Casamento%20de%20Camile%20e%20Haylton.%20Dia%2012%20de%20Outubro%2C%20%C3%A0s%2015%3A30h.%0AQnt%20Acompahantes%3A`
 const [missRequired, setMissRequired] = useState(false)
 const [confirmation, setConfirmation] = useState(false)

 function required(name, lastName, status){
  if (name !== '' || lastName !== ''){
      confirmGuest(name, lastName, status)
      setConfirmation(true) 
  }else{
    setMissRequired(true)
  }
 }


 return (
    <div className="App">
      <div>
        <Background/>
        <Container enableMiddle={false} enableBottom={false} color={''}/>
      </div>
      <div className={styles.inputs} onClick={() => setMissRequired(false)}>
        <Input missRequired={missRequired} type='text' placeholder={!missRequired ? 'Nome': 'Obrigatorio'} onChange={setName}/>
        <Input missRequired={missRequired} type='text' placeholder={!missRequired ? 'Ultimo nome': 'Obrigatorio'} onChange={setLastName}/>
        <div className={styles.statusBox}>
          
            <label for="status"></label>
            <select className={styles.status} onChange={(e) => setStatus(e.target.value)} name="status" id="status">
              {Status.map((stt) => (
                <option value={stt.type}>{stt.type.toUpperCase()}</option>
              ))}
            </select>
            
          </div>
      </div>
      <div className={styles.containerButtons}>
        <Button action={(e) => required(name, lastName, status)} link={''} navigate={'#'} text={'Confirm'} target='_self'>
          <FcInvite style={{color: 'white', fontSize: '100px'}}/>
        </Button>
      </div>
      {confirmation ? (
        <Confirmation 
          link={linkWpp}
          textColor={'rgb(140, 63, 13)'}
          text={'Deseja enviar tua confirmação?'}/>  
      ) : null}
      
    </div>
  );
}

export default Confirm;
