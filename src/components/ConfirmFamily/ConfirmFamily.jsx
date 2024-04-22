import React, { useState } from 'react';
import styles from './ConfirmFamily.module.css';
import Input from '../Input/Input';
import { BsPlusCircle } from "react-icons/bs";

import Button from '../ComponentsCounter/Button/Button';
import { FcInvite } from 'react-icons/fc';
import { useMoreInvited } from '../../context/moreInvited';

function ConfirmFamily() {
  const {guests, setGuests} = useMoreInvited();
  const [missRequired, setMissRequired] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const {moreInvitedBtn,setMoreInvitedBtn} = useMoreInvited(); // Correção aqui
  const [name, setName] = useState('');

  function required() {
    const allValid = guests.every(guest => guest.fullName.trim() !== '');

    if (allValid) {
      setConfirmation(true);
    } else {
      setMissRequired(true);
    }
  }

  function handleInputChange(index, value) {
    const newGuests = [...guests];
    newGuests[index].fullName = value;
    setGuests(newGuests);
    console.log(newGuests);
  }

  function handleAddGuest() {
    setGuests([...guests, { fullName: '' }]);
  }
  function handleRemoveGuest(indexToRemove) {
    setGuests(guests.filter((guest, index) => index !== indexToRemove));
  }

  const back = () =>{
    setMoreInvitedBtn(false)
    handleInputChange()
  }


  return (
    <div className={styles.confirmation}>
      <div className={styles.inputs} onClick={() => setMissRequired(false)}>
        {guests.map((guest, index) => (
          <div key={index}>
            <Input
              missRequired={missRequired}
              type='text'
              placeholder={!missRequired ? 'Nome e Sobrenome' : 'Obrigatório'}
              // Adicionei este valor para que o input seja controlado
              value={guest.fullName}
              onChange={(e) => {
                setName(e);
                handleInputChange(index, e);
              }} // Passei apenas o valor do input aqui
            />
            <button onClick={() => handleRemoveGuest(index)}>-</button>
          </div>
        ))}
        <div className={styles.containerButtons}> 
          <Button action={handleAddGuest} link={''} navigate={'#'} text="Adicionar Convidado" >
            <BsPlusCircle style={{color: 'white', fontSize: '100px'}}/>
          </Button>
          <Button action={back} link={''} navigate={'#'} text="Confirmar Todos" >
            <FcInvite style={{color: 'white', fontSize: '100px'}}/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmFamily;
