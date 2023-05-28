import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/ComponentsCounter/Container/Container'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import styles from './Login.module.css'
import Background from '../../components/ComponentsCounter/Background/Background';

export default function Login() {

  const { user, signIn, err } = useContext(UserContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
      if (user) navigate(window.history.back())
  }, [user])
  
  const handleSingIn = (email, password) => {
    signIn(email, password)

  }
  const wrong = () =>{ if (err) {
    return <p>Wrong email or password</p>
    
  }}
  return (
    <div className='App'>
      <Background/>
      <div className={styles.containerMid} >
        <Container enableTop={true} enableMiddle={false} enableBottom={false}/>
        
        <div className={styles.containerLogin}>
          <Input type={'text'} onChange={setEmail} placeholder={'Email'} />
          <Input type={'password'} onChange={setPassword} placeholder={'Password'} />
        </div>
        <div className={styles.buttons}>    
            <button 
                onClick={() => {handleSingIn(email, password)}}>
                Login
            </button>
        </div>
      </div>
    </div>
  )
}