import React from 'react'
import {auth,provider} from '../firebase'
import { signInWithPopup,} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'

export const Login = ({setauth}) => {

    const navigate = useNavigate()

    const signin = () =>{
        signInWithPopup(auth,provider).then((result) =>{
            localStorage.setItem("isauth",true);
            setauth(true);
            navigate("/")
        })
    }


  return (
    <div className="loginPage">
        <p>Sign with Google</p>
        <button className='login-with-google-btn' onClick={signin}>
            Sign in with Google
        </button>
        <Signup />
    </div>
  )
}
