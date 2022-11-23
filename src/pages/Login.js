import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/')
  }
  return (
    <div>
      <form className='login-form' onSubmit={loginUser}>
        <input placeholder='id' />
        <input placeholder='password' />
        <button>로그인</button>
      </form>
    </div>
  )
}

export default Login
