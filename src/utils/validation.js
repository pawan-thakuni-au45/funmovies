
import React from 'react'

const validation = (email,password) => {
    const email=^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$.test(email)
    const password=^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$.test(password)

    if (!email) return "Email is not valid"
    if(!password) return "Password is not valid"

    return null

 
}

export default validation