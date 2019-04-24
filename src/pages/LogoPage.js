import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Logo from '../img/logo.png';


class LogoPage extends Component { 
    render() {
        return (
         <div id="top">
            <div className="App__Aside">
               <div id="shape1"></div>
               
                <div id="logoPosition"> 
                <img src={Logo} id="logo" alt="logo" />
                </div>

            </div>
        <div id="shape2"></div>
        </div>
      );
   }
}


export default LogoPage