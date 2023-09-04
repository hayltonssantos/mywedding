import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getFirestore,addDoc, collection, onSnapshot, query, updateDoc, setDoc, doc } from 'firebase/firestore'
import firebaseApp from '../../services/firebase'

const InvitedContext = createContext({})

const InvitedProvider = ({children}) =>{
  
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const db = getFirestore(firebaseApp)

  /* const navigate = useNavigate() */

  const addGuest = async function(cod = "1", name,lastName,age = '', status){
    console.log(cod, name,lastName,age,status)
    const id = `${name.toLowerCase()}${lastName.toLowerCase()}`
    if (cod === '0'){
      /* navigate("/guests") */
    }

    const invited_json = {
      name, 
      lastName,
      age,
      status
    }
    await setDoc(doc(db,`inviteds/${id}`),invited_json)
    await updateDoc(doc(db,`inviteds/${id}`),invited_json)
    /* await addDoc(collection(db,'inviteds'), invited_json) */
  }

  const confirmGuest = async function(name,lastName,status){
    const id = `${name.toLowerCase()}${lastName.toLowerCase()}`
    
    if (status.toLowerCase() === 'confirmado'){
        status = 'confirmed'
    }
    if (status.toLowerCase() === 'não confirmado'){
        status = 'unconfirmed'
    }
    
    const invited_json = {
      name, 
      lastName,
      status,
    }
    await updateDoc(doc(db,`inviteds/${id}`),invited_json)
    /* await addDoc(collection(db,'inviteds'), invited_json) */
  }

    return (
        <InvitedContext.Provider value={{name, addGuest, confirmGuest}}>
            {children}
        </InvitedContext.Provider>
    )
}
export {InvitedContext, InvitedProvider}