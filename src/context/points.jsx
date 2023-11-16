import { getFirestore } from "firebase/firestore";
import { createContext, useState } from "react";
import firebaseApp from "../../services/firebase";
import {collection, onSnapshot, query} from 'firebase/firestore'


const PointContext = createContext({})

const PointProvider = ({children}) =>{
  const [point, setPoint] = useState(0)

  const db = getFirestore(firebaseApp)

  const attPoints = () =>{
    const q = query(collection(db, 'points'))
    onSnapshot(q, (querySnapshot)=>{
        querySnapshot.forEach((doc) =>{
            console.log(doc.id, doc.data)
            
                aux.push({
                    id: doc.id,
                    ...doc.data()
                    
                })
            
        
        })
        {aux.map((m)=>(
            setPoint(m.point)
         ))}
    })
}

const getPoints = () =>{
    attPoints()
    {aux.map((m)=>(
        setPoint(m.point)
     ))}
}

  return (
    <PointContext.Provider value={{point, attPoints}}>
        {children}
    </PointContext.Provider>
  )
}
export {PointContext, PointProvider}