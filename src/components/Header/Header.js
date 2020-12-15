import React, { Component } from 'react';
import NavigationBar from './navBar/NavigationBar'
import LoginButton from '../login/loginButton'
import RegisterButton from '../login/registerButton'

class Header extends Component {
    render(){
      return (
        <div className='header'>
            <NavigationBar />   
            <LoginButton />
            <RegisterButton />
        </div>
      );
    }
}

export default Header;

