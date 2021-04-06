import React from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from '../components/buttons/Button'
import firebase from './../firebase/firebaseConfig'
import firebaseApp from './../firebase/firebaseConfig';


const LoginPageStyles = styled.div `  
max-width: 480px;
margin: 6rem auto 0;
header{
    text-align:center;
    margin-bottom: 2rem;
}
    h1{
        font-size: 2rem;
        font-weight:600;
    }
    .jimo{
        background:grey;
    }
    button{
        margin-top:2rem;
    }

`
const LoginPage = (props) => {

    // component logic
    const handleLogin = (e) =>{
        // no concept of keyword 'this'
        //console.log(e)
        firebaseApp.auth().signInWithEmailAndPassword('adam@home.com', '123456')
        .then(userCredenital=>{
            console.log(userCredenital)
            console.log(userCredenital.user.uid)
            // redirect to the dashboard
        })
    }

    return ( 
            <LoginPageStyles>
              <header>
                 <h1>Account Login</h1>
                  <p>access your employee manager</p>
                  {/* <button onClick={handleLogin}>dsdssdds</button> */}
             </header>


  
          <FormInput   inputType="email" label="valid email address"/>
          <FormInput   inputType="password" label="password (8 charachters)"/>
          <Button onClick={handleLogin}  label="login to your account" uiStyle="signup"/>
        
            </LoginPageStyles>

    );
}
 
export default LoginPage;

// function Appbar(){
//     link
// }

// function Taskbar(){
//     link
// }

// function Router(prop){
//     switch(prop)
//         Route(prop)
//         LoginPage(prop)
// }