import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Navbar() {

  const navigate = useNavigate()

  const auth  = localStorage.getItem('token')

  function LogOut()
  {
    localStorage.clear()
    navigate('/signin')

  }

  return (
    
    <>
            <div className='bg-slate-500 py-4 font-bold text-xl'>
                <div className='flex justify-between container ms-10 max-w-[90%] '>
                <h3>Company Name</h3>
                   {
                    auth ? 
                     <>
                    <ul className='flex gap-10 menu'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link onClick={LogOut}><li>Log Out</li></Link>
                        <img src="..." alt="...." />
                    </ul>
                     </>:
                     <>
                     <ul className='flex gap-10 menu'>
                     <Link to={'/'}><li>Home</li></Link>
                      <Link to={'signup'}><li>Sign Up</li></Link>
                        <Link to={'/signin'}><li>Sign In</li></Link>
                        </ul>
                     </>

                   }
                </div>
            </div>
    </>
  )
}

export default Navbar
