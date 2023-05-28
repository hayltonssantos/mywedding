import Background from '../../components/ComponentsCounter/Background/Background'
import Button from '../../components/ComponentsCounter/Button/Button';
import Container from '../../components/ComponentsCounter/Container/Container'
import React, { useContext } from 'react';
import styles from './Admin.module.css'
import { UserContext } from '../../context/user';

import { BiLogOut } from "react-icons/bi";
import { FcInvite } from "react-icons/fc";


function Admin() {
  const {signOut} = useContext(UserContext)
  return (
    <div className="App">
      <div>
        <Background/>
        <Container enableBottom={false}/>
      </div>
      <div className={styles.containerButtons}>
        <Button action={() => signOut()} text={'Logout'}>
          <BiLogOut style={{color: 'white', fontSize: '100px'}}></BiLogOut>
        </Button>

        <Button link={'guests'} navigate='/guests' text={'Guests'}>
          <FcInvite style={{color: 'white', fontSize: '100px'}}/>
        </Button>
        <Button/>
      </div>
    </div>
  );
}

export default Admin;
