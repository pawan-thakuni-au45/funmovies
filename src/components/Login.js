import React, { useState } from 'react'
import Header from './Header'
import { Toggle } from 'material-ui'

const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true)

    const toggleIt=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
    
     <Header/>
<div className='absolute'>
     <img className="" alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg">
    
     </img>
     </div>
     <div>
       <form className='bg-black absolute w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white bg-opacity-80' >
        <h1 className='py-4 font-bold text-3xl'>{ isSignInForm? "Sign In":"Sign Up"}</h1>
       { !isSignInForm &&(<input type="name" placeholder='Name' className='w-full p-2 m-4 bg-gray-700 rounded-xl'></input>)}
       <input type="email" placeholder='Email' className='w-full p-2 m-4 bg-gray-700 rounded-xl'></input>
       <input type="password" placeholder='Password' className='w-full p-2 m-4 bg-gray-700 rounded-xl'></input>

         
         
        <button className='w-full bg-red-800 py-4 m-4 rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p onClick={toggleIt} className='cursor-pointer'>{ isSignInForm?"Are you new to Netflix ? Sign Up now":"Already Sign In"}</p>
       </form>
     </div>
     </div>
  )
}

export default Login