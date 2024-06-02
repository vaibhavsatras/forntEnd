import React, { useEffect } from 'react' 
import {useNavigate} from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  function HomePage()
  {
    const token = localStorage.getItem('token')
    if(token)
      {
        navigate('/')
      }
      else
      {
        navigate('/signin')
      }
    
  }

  useEffect(()=>{

    HomePage()

  },[])
    
  return (
    <>
            <div>
                  This Is Home Page
            </div>
    </>
  )
}

export default Home
