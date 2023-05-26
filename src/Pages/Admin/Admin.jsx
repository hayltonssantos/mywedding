import Background from '../../components/ComponentsCounter/Background/Background'
import Button from '../../components/ComponentsCounter/Button/Button';
import Container from '../../components/ComponentsCounter/Container/Container'
import React, { useContext } from 'react';
import styles from './Admin.module.css'
import { UserContext } from '../../context/user';

function Admin() {
  const {signOut, user} = useContext(UserContext)
  return (
    <div className="App">
      <div>
        <Background/>
        <Container enableBottom={false}/>
      </div>
      <div className={styles.containerButtons}>
        <Button action={() => signOut()} text={'Logout'}/><Button/><Button/>
      </div>
    </div>
  );
}

export default Admin;
