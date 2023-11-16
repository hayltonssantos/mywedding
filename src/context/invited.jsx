import { createContext, useMemo, useState } from "react";
import { getFirestore, updateDoc, setDoc, doc, deleteDoc } from 'firebase/firestore'
import firebaseApp from '../../services/firebase'

const InvitedContext = createContext({})

const InvitedProvider = ({children}) =>{
  
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const db = getFirestore(firebaseApp)

  const addGuest = async function(cod = "1", name,lastName,age = '', status){
    
    const id = `${name.toLowerCase()}${lastName.toLowerCase()}`
    const idWSpaces = id.split(" ").join("")
    console.log(idWSpaces)

    const invited_json = {
      name: name.split(" ").join(""), 
      lastName: lastName.split(" ").join(""),
      age,
      status
    }
    await setDoc(doc(db,`inviteds/${idWSpaces}`),invited_json)
    await updateDoc(doc(db,`inviteds/${idWSpaces}`),invited_json)
    /* await addDoc(collection(db,'inviteds'), invited_json) */
  }
  
  const confirmGuest = async function(name,lastName,status){
    const id = `${name.toLowerCase()}${lastName.toLowerCase()}`
    const idWSpaces = id.split(" ").join("")

    if (status.toLowerCase() === 'confirmado'){
        status = 'confirmed'
    }
    if (status.toLowerCase() === 'não confirmado'){
        status = 'unconfirmed'
    }
    
    const invited_json = {
      name: name.split(" ").join(""), 
      lastName: lastName.split(" ").join(""),
      age,
      status
    }
    await updateDoc(doc(db,`inviteds/${idWSpaces}`),invited_json)
    /* await addDoc(collection(db,'inviteds'), invited_json) */
  }
    
  const deleteGuest = async function (name, lastName){
    const key = (`${name.toLowerCase()}${lastName.toLowerCase()}`)
    const database = 'inviteds'
    const docRef = doc(db, database, key)

    deleteDoc(docRef)
      .then(() => {
          console.log("Entire Document has been deleted successfully.")
      })
      .catch(error => {
          console.log(error);
      })

  }

    return (
        <InvitedContext.Provider value={{name, addGuest, confirmGuest, deleteGuest}}>
            {children}
        </InvitedContext.Provider>
    )
}
export {InvitedContext, InvitedProvider}