import React, { useRef, useState } from 'react'
import Header from './Header'
import validation from '../utils/validation'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    const[isSignInForm,setIsSignInForm]=useState(true)
    const [Error,setErrormsg]=useState(null)

    const email=useRef(null)
    const password=useRef(null)

    console.log(email)
    console.log(password)
    const handleClick=()=>{

     
      

      console.log(email)
      console.log(password)
      const message=validation(email.current.value,password.current.value)
      setErrormsg(message)

      if(message) return 

      if(!isSignInForm){
    

const auth = getAuth();
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode +" "+errorMessage)
    // ..
  });

      }
      else{
       

const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode +" "+errorMessage)

  });
      }

     
      
    }

    const toggleIt=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div >
    
     <Header/>
<div className='absolute'>
     <img className="" alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg">
    
     </img>
     </div>
     <div>
       <form onSubmit={(e)=>e.preventDefault()}
       className='bg-black absolute w-3/12 p-12 my-32 mx-auto right-0 left-0 text-white bg-opacity-80' >
       
        <h1 className='py-4 font-bold text-3xl'>{ isSignInForm? "Sign In":"Sign Up"}</h1>

       { !isSignInForm &&(<input type="name" 
       placeholder='Name' 
       className="w-full p-2 m-4 bg-gray-700  rounded-xl"/>)}
       <input 
       ref={email}
       type="email"
        placeholder='email' 
        className="w-full p-2 m-4 rounded-xl bg bg-gray-700"/>
       <input 
       ref={password}
        type="password" 
        placeholder='Enter your password'
       className="w-full p-2 m-4 rounded-xl bg-gray-700"/>

       <p className='text-xl text-red-600'>{Error}</p>
         
        <button className='w-full bg-red-800 py-4 m-4 rounded-lg' onClick={handleClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p onClick={toggleIt} className='cursor-pointer'>{ isSignInForm?"Are you new to Netflix ? Sign Up now":"Already registerd? Sign In Now"}</p>
        
       </form>
     </div>
     </div>
  )
}

export default Login