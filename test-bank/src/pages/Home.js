import React from 'react'
import Header from  '../components/Header'
import { NavLink } from 'react-router-dom'

import './css/Home.css';

const Home = () =>

<>
<Header />
 <section className="center">
    <div className="center-title">
        <h1>Um Banco transparente,</h1>
        <h1> completo e com a sua cara</h1>
        <p>Conta digital e cartão de crédito gratuitos.</p>
        <p>Saques e transferências sem tarifa</p>
        <button id="btnOpen"><NavLink to="register" activeStyle={{
    fontWeight: "bold",
    color: "white"}}>Abra sua conta</NavLink></button>
    </div>
    <div> 
    <img src={require('../images/29182.jpg').default} className="ilustration" alt="ilustration"/>
    </div>
    
</section>
  
</>

export default Home;