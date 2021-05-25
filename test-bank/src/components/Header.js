import React from 'react'
import { Link } from 'react-router-dom'

import '../pages/css/Header.css'


const Header = () =>{

return (
<> 
 <header>
    <h1><a href="http://localhost:3000/">Banco <span>XYZ</span></a></h1>
    <button  className="btnMobile"><i class="fas fa-bars"></i></button>
    <nav className="nav">
        <button id="btnLogIn" className="btn"><Link to="login" >LogIn</Link></button>
        <button id="btnRegister" className="btn"><Link to="register">Seja XYZ</Link></button>
    </nav>
 </header>
</>
);
}
export default Header;