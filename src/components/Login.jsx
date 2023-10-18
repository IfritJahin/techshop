import React from 'react'

import '../assets/login.css'
function Login() {
  return (
    <div>
      <div className='log'>
        <form className='login_form'>
          <input type='email' className='email' placeholder='Email' ></input>
          <input type='password' className='password' placeholder='Password'></input>
        </form>
      </div>
    </div>
  )
}

export default Login
