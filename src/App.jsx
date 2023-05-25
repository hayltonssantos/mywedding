import { useState } from 'react'

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

import Counter from '../src/Pages/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
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
