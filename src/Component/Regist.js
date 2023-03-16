import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

function Registrer() {


const [user, setUser] = useState({
  email: '',
  password: '',
})

//hoos
const {singup}= useAuth()
const navigate  = useNavigate()


const HandleChange = ({target: {name, value}}) => {
  setUser({...user, [name]: value})

}

const handleSubmit = async (e) =>{
  e.preventDefault()
  
  try{
   await singup(user.email, user.password)
    navigate("/")

  } catch (error){
      console.log(error);

  }
  
}


  return (
    <div>

      <h1>Registrer</h1>
      <form onSubmit={handleSubmit}>


          <label htmlFor ='email'>Email</label>
          <input onChange={HandleChange} type="email" name='email' placeholder='youremail@company.lt' />


          <label htmlFor='password'>Password</label>
          <input onChange={HandleChange} type="password" name='password' id='password' />
          
          <button>registrar</button>


      </form>
    </div>
  )
}

export default Registrer