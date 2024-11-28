import React from 'react'

function Login( { switchForm }) {
  return (

    <div className='LoginForm'>
<form>

    <div className='form_field'>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email'></input>
    </div>

    <div className='form_field'>
        <label htmlFor='password'>password</label>
        <input type='password' id='password' ></input>
    </div>

<button>Login</button>
    </form>

    <p>If you are an new user{""}</p>
    <span id='LinkToForm' onClick={()=> switchForm("register")}>click here</span>
    </div>

  );
}

export default Login