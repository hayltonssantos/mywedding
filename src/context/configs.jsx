import { getFirestore, query, collection, onSnapshot } from 'firebase/firestore'
import firebaseApp from '../../services/firebase'
import { createContext, useEffect, useState } from 'react'

const ConfigsContext = createContext({})

const ConfigsProvider = ({ children }) => {
  const [prices, setPrices] = useState([])
  const [quintaPrice, setQuintaPrice] = useState(0)
  const [cateringPrice, setCateringPrice] = useState(0)

  useEffect(() => {
    const db = getFirestore(firebaseApp)
    const q = query(collection(db, 'configs'))

    onSnapshot(q, (querySnapshot) => {
      const aux = []
      querySnapshot.forEach((doc) => {
        aux.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setPrices([...aux])
    })
  }, [])

  useEffect(() => {
    if (prices.length > 0) {
      setCateringPrice(prices[0].catering)
      setQuintaPrice(prices[0].quinta)
    }
  }, [prices])

  const getPrices = (name) => {
    switch (name) {
      case 'catering':
        return cateringPrice
      case 'quinta':
        return quintaPrice
      default:
        return 0
    }
  }

  return (
    <ConfigsContext.Provider value={{ prices, getPrices }}>
      {children}
    </ConfigsContext.Provider>
  )
}
export { ConfigsContext, ConfigsProvider }
