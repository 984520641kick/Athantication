import React from 'react'

function Register({ switchForm }) {
  return (
    <div className='registerform'>
<form>

    <div className='form_field'>
        <label htmlFor='userName'>userName</label>
        <input type='text' id='useerName'></input>
    </div>

    <div className='form_field'>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email'></input>
    </div>

    <div className='form_field'>
        <label htmlFor='password'>password</label>
        <input type='password' id='password' ></input>
    </div>

    <div className='form_field'>
        <label htmlFor='address'>Address</label>
        <input type='text' id="address"></input>
    </div>
<button>Register</button>
</form>
<p>If you are an existing user{""} 
    <span  id='LinkToForm' onClick={()=>switchForm("Login")}>click here</span>
    </p>
    </div>
  )
}

export default Register;