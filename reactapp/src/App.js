import React from 'react';
import './App.css';
import Login from "./Components/Login";
import Register from "./Components/Register";
import { useState } from 'react';

function App() {
    const[isNewUser,setIsNewUser] = useState(false);

function switchForm(formType){

  if(formType="register"){

        setIsNewUser(true);
    }else{
        setIsNewUser(false);
    }
  
}
  return (
    <div className='App'>
        
    <h3>Authentication</h3>

    {isNewUser?<Register  switchForm={switchForm}/>:
    <Login switchForm={switchForm}/>}




    </div>
  )
}

export default App;