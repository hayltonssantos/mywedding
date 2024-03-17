import React, { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter, Navigate, Link } from 'react-router-dom'
import { UserProvider } from './context/user'
import styles from './App.module.css'
import Counter from '../src/Pages/Counter/Counter'
import RingLoader from 'react-spinners/RingLoader'
import Admin from './Pages/Admin/Admin'
import Login from './Pages/Login/Login'
import Guests from './Pages/Guests/Guests'
import AddGuests from './Pages/AddGuests/AddGuests'
import ProtectedRoutes from './Pages/protectedroutes'
import Ourdate from './Pages/Ourdate/Ourdate'
import Confirm from './Pages/Confirm/Confirm'
import {InvitedProvider} from './context/invited'
import TheFirstYear from './Pages/TheFirstYear/TheFirstYear'
import { QuestionsProvider } from './context/questions'
import Questions from './Pages/Questions/Questions'
import Presents from './Pages/Presents/Presents'
import MbWay from './Pages/MbWay/MbWay'
import GoogleDriveUploader from './Pages/Upload/Upload'
import { ConfigsProvider } from './context/configs'

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
    <ConfigsProvider>
      <InvitedProvider>
        <UserProvider>
          <QuestionsProvider>
            <BrowserRouter>
              <Routes>
                <Route path='counter' element={<Counter/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='confirm' element={<Confirm/>}/>
                <Route path='presents' element={<Presents/>}/>
                <Route path='mbway' element={<MbWay/>}/>
                <Route path='upload' element={<GoogleDriveUploader/>}/>
                
                <Route element={<ProtectedRoutes />}>
                  <Route path='guests' element={<Guests/>}/>
                  <Route path='admin' element={<Admin/>}/>
                  <Route path='addguests' element={<AddGuests/>}/>
                  <Route path='ourdate' element={<Ourdate/>}/>
                </Route>
                  {/* <Route path='thefirsty' element={<TheFirstYear/>}/>
                  <Route path='/questions/:id' element={<Questions/>}/>
                */}
                <Route path='/' element={<Navigate to={'/counter'}/>}/>
                <Route path='*' element={<Navigate to={'/counter'}/>}/>
              </Routes>
            </BrowserRouter>
          </QuestionsProvider>
        </UserProvider>
      </InvitedProvider>
    </ConfigsProvider>
    </>
  )
}

export default App
