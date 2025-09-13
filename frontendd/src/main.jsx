import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Success from './pages/Success.jsx'
import Fail from './pages/Fail.jsx'

function Main() {
  const [users, setUsers] = useState([])    

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App users={users} />} />
          <Route path='/register' element={<Register users={users} setUsers={setUsers} />} />
          <Route path='/success' element={<Success />} />
          <Route path='/fail' element={<Fail />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Main />)
