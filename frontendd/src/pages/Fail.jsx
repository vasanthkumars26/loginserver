import React from 'react'
import {Link} from 'react-router-dom'

const Fail = () => {
  return (
    <div>
        <h1 className='text-red-500 text-3xl font-semibold mt-[20%] animate-ping' >Login Failed!  :(</h1>

    <Link className=' text-blue-600 font-bold text-xl underline' to={"/register"} >REGISTER HERE!!!</Link>

    </div>
  )
}

export default Fail