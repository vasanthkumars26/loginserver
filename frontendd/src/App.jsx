import axios from 'axios'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './App.css'

function App({users=[]}) {
  const [euser,setEuser] = useState("")
  const [epass,setEpass] = useState("")
  const [ruser,setRuser] = useState(true)

   
    const navigate = useNavigate()

  

const handleUser = ()=>{
   axios.post("http://localhost:3000/login",{"username":euser,"password":epass})


  let found =false

  users.forEach((item)=>{
      if(item.name === euser && item.pass === epass){
        found=true

        navigate("/success",{state:{user:euser}})
        
        
      }
  })
  if(!found ){
    setRuser(false)
    navigate("/fail")
    alert("Register first!!")
  }
}


  return (
    <div className='justify-center flex items-start  h-screen w-[100%] bg-cover  bg-[url("https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg")]'>
    <div className='bg-blur mt-36 text-black p-10 rounded-xl  backdrop-blur-md w-[60%] border border-gray-700 '>
              {ruser ? <p className='mt-1 text-green-500'>HEY HELLOO.. :)</p> : <p className='mt-1 text-red-500'>Please SignUp before you login :)</p>}

        <input className='border mt-10 border-gray-300 outline-none rounded-lg p-2 w-[40%]' onChange={(e)=>setEuser(e.target.value)} name = "username" placeholder='Name..' required/> <br /><br />
        <input className='border border-gray-300 outline-none rounded-lg p-2 w-[40%]' onChange={(e)=>setEpass(e.target.value)} name = "password" placeholder='Password..' required /> <br /><br />
        <button className='bg-blue-500 text-white p-2 rounded-xl w-36' onClick={handleUser}>Submit</button><br /><br />

        <br />
        <p className='text-white' >Dont't have an account? <Link className='underline' to="/register">register..</Link> </p>
    </div></div>
  )
}

export default App
