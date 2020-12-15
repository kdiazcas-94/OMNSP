import React, { Component } from 'react';
import navBar from './navBar'
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component {

    render(){
        return (
            <div className="navBar">
                <ul className= "links">
                {
                        navBar.navBar2.map((type, a) => {
                        return ( <li key ={a}><NavLink to = {type.link} style={{
                                color: 'white', 
                                textDecoration: 'none'}}
                            activeStyle={{
                                color: 'red', 
                                textDecoration: 'none',
                                fontWeight: 'bold'}}>{type.text}</NavLink></li> )
                        })
                    }
                </ul>
            </div>
      );
    }
}

export default NavigationBar;