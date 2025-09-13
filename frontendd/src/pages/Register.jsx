import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = ({users,setUsers}) => {

const [euser,setEuser] = useState("")
const [epass,setEpass] = useState("")

const navigate = useNavigate()

const handleAdd = (e)=>{
  e.preventDefault(); 
  setUsers([...users,{name:euser,pass:epass}])
  navigate("/")
}

  return (
    <div className='justify-center flex items-start  h-screen w-[100%] bg-cover  bg-[url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg")]' >
       <form className='bg-blur mt-36 text-black p-10 rounded-xl  backdrop-blur-md w-[60%] shadow-xl border border-gray-700 ' onSubmit={handleAdd}>
      <input className='border mt-10 border-gray-300 outline-none rounded-lg p-2 w-[40%]' onChange={(e)=>setEuser(e.target.value)} type="text" placeholder='Name..' required /><br /><br />
      <input className='border mt-10 border-gray-300 outline-none rounded-lg p-2 w-[40%]' onChange={(e)=>setEpass(e.target.value)} type="password" placeholder='Password..' required /><br /><br />
      <input className='border mt-10 border-gray-300 outline-none rounded-lg p-2 w-[40%]' type="password" placeholder='Confirm password..' required /><br /><br />

      <button className='bg-blue-500 text-white p-2 rounded-xl w-36' type="submit">Register</button>
         <p className='mt-3 text-white' >Already account exists ! <Link className='underline' to="/">Login..</Link> </p>
      </form>

    

    </div>
  )
}

export default Register