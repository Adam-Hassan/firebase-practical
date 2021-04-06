import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
 
import Logo from './../components/icons/Logo'
 

const HomePageStyles = styled.div `  
max-width: 480px;
margin: 8rem auto 0;
text-align:center;
header{
    margin-bottom: 2rem;
}
    h1{
        font-size: 3rem;
        font-weight:600;
    }
    p{
        font-size: 1.125rem;
        color:#7c7b8a;
        width: 60%;
        margin: 1rem auto 0;
    }
   
    svg{
        width: 80px;
    }
    a{
    display:block;
    margin: 1rem auto 0;
    max-width: 320px;
    text-decoration: none;
    width: 90%;
    border: inherit;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: inherit;
    color: #8e979c;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
}

.login {
    background: linear-gradient(to top, #3f51b5, #2196f3);
    color: white;
}

.register {

background: linear-gradient(to top, #de1111, #f52415);
color: white;

}
`
const HomePage = (props) => {
    return ( 
            <HomePageStyles>
                <Logo/>
              <header>
                 <h1>Employee Manager</h1>
                 <p>we focus on the paperwork while you foucs on your employees</p>
                 <Link className="login" to="/login">login</Link>
                 <Link className="register" to="/register">register</Link>
             </header>
           
             </HomePageStyles>
    );
}
 
export default HomePage;