import React from 'react';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import logogoogle from "../Styles/img/logogoogle.png";
import { Link } from 'react-router-dom';

function Login() {


  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  //hoos
  const { login, loginWithGoogle, resetPassword} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();


  const HandleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await login(user.email, user.password);
      navigate("/");
    }catch(error){
        setError(error.message);
      }
  };

  const handleGoogleSingIn = async () =>{
    await loginWithGoogle();
    navigate("/");
  }

  const handleResetPassword = async()=>{
      if (!user.email) return setError("Por favor ingresa tu email");
    
        try{
          await resetPassword(user.email);
          setError("revisa tu email para reset password");
        }catch(error){
          setError(error.message);

        }
  }


  return (
    <div className='container_login'>

    

          <h1>Login</h1>
      <form onSubmit={handleSubmit}>

          <label htmlFor='email'>Email</label>
          <input onChange={HandleChange} type="email" name='email' placeholder='youremail@company.lt' />


          <label htmlFor='password'>Password</label>
          <input onChange={HandleChange} type="password" name='password' id='password' />
        
              <div className='olvido'>
                  <button>Login</button>
                  <a href="#!" onClick={handleResetPassword}>Olvido su contraseña?</a>
                  
              </div>
      </form>
      

      <button className='btn_google' onClick={handleGoogleSingIn}>
      <img src={logogoogle} alt="logo" /> Continuar con Google</button>
      <Link to="/registrer">Registrar</Link>
      </div>
    
  )
}

export default Login