import React, { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import styles from './App.module.css'
import Counter from '../src/Pages/Counter/Counter'
import RingLoader from 'react-spinners/RingLoader'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const override = ` 
    display: flex;
    justify-content:center;
    align-self:center;
    margin: auto;
    border-color: red;
  `

  return isLoading ?(
      <>
      <div>
        {
          <>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>a wedding is coming</h1>
          </div>  
          <div className={styles.loader}>
            <RingLoader 
              color={'#8c3f0d'} 
              isLoading={isLoading}
              css={override} 
              size={50} 
              />
          </div>
          </>
        }
      </div>
      </> 
    ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='*' element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
