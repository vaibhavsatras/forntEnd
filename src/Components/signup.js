import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {

  const[name,setName] =  useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')

  const navigate = useNavigate()

  function AddData(e)
  { 
    
    const newUser = {
      name,email,password
    }
    
    setName("")
    setEmail("")
    setPassword("")

    fetch('http://localhost:5000/user/addUser',{

        method: 'POST',
        headers:{

          'Content-Type': 'application/json'
        },

        body: JSON.stringify(newUser)

    }).then((user)=>{

        return user.json()

    }).then((result)=>{

        if(!result)
          {
            navigate('/signup')
          }
          else
          {
            navigate('/')
          }

    })

  }


  return (
    <>
        <div>
            <div className='bg-white p-5 py-10 max-w-[40%] m-auto mt-[5%] box'>
                <div className='m-auto w-72'>
                <input type="text" name='name' placeholder='Enter The Name' className='block border-2 w-72 border-black mb-4 p-2 rounded-lg'
                 value={name} onChange={(e)=>setName(e.target.value)}
                />
                <input type="email" name='email' placeholder='Enter The Email' className='block border-2 w-72 border-black mb-4 p-2 rounded-lg'
                 value={email} onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" name='password' placeholder='Enter The Password' className='block border-2 w-72 border-black mb-4 p-2 rounded-lg'
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                />
                <button type='submit' className='block border-2 w-72 bg-blue-700 mb-4 p-2 rounded-lg text-white btn' onClick={AddData}>Submit</button>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Signup
