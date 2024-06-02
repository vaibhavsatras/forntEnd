import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Signin() {

  const navigate = useNavigate();

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')

  function LogIn()
  {
    const data = {
      email,password
    }
    
    fetch('http://localhost:5000/user/signin',{
      method: 'POST',
      headers :{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }).then((result)=>{

        return result.json()

    }).then((user)=>{

        if(!user.user.email && !password)
          {
            navigate('/signin')
          }
          else
          {
            navigate('/')

            localStorage.setItem('token',user.token)
          }
    })

    setEmail("")
    setPassword("")

  }

  return (
    <>   
        <div>
            <div className='bg-white p-5 py-10 max-w-[40%] m-auto mt-[5%] box'>
                <div className='m-auto w-72'>
                <input type="email" name='email' placeholder='Enter The Email' className='block border-2 w-72 border-black mb-4 p-2 rounded-lg'
                 value={email}   onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" name='password' placeholder='Enter The Password' className='block border-2 w-72 border-black mb-4 p-2 rounded-lg'
                  value={password}   onChange={(e)=>setPassword(e.target.value)}
                />
                <button className='block border-2 w-72 bg-blue-700 mb-4 p-2 rounded-lg text-white btn' type='submit'
                  onClick={LogIn}
                >Submit</button>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Signin
