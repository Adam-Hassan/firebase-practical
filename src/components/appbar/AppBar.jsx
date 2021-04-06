import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const AppBarStyles = styled.nav `

    box-shadow: 0 0 3px 1px grey;
    padding: 1rem;

 a{
     text-decoration:none;
    color:#494646;
}

li{
    margin: 0 1rem 0;
}

ul{
    display: flex;
    justify-content: center;
}
`

const AppBar = () =>{

return (
 <AppBarStyles>
 <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/login">Login</Link></li>
     <li><Link to="/register">Register</Link></li>
 </ul>   
 </AppBarStyles>
 )

}

export default AppBar; 

