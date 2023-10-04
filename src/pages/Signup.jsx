import React, { useState } from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const[email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    const navigate = useNavigate();

    const createUser = () =>{
        createUserWithEmailAndPassword(auth,email,pass).then((value) =>{
            alert("success")
            navigate("/")
        })
    }

  return (
    <div>
        <label>Email:</label>
        <input type="email" onChange={(e) =>{setEmail(e.target.value)}} />
        <label htmlFor="">Password:</label>
        <input type="password" onChange={(e) =>{setPass(e.target.value)}} />
        <button onClick={createUser}>SignUp</button>
    </div>
  )
}

export default Signup