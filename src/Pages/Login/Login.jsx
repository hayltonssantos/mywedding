import React, { useContext, useEffect, useState } from 'react'
import Container from '../../components/ComponentsCounter/Container/Container'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import styles from './Login.module.css'
import Background from '../../components/ComponentsCounter/Background/Background';

export default function Login() {

  const { user, signIn } = useContext(UserContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {
      if (user) navigate("/admin")
  }, [user])
  
  const handleSingIn = async (email, password) => {
      signIn(email, password)
  }

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
