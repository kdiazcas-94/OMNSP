import React, { Component } from 'react';
import productOptions from './productOptions.json'
import {NavLink} from 'react-router-dom';

class ProductOptions extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render(){
        return (
            <div className="productDropDown">
                <ul className={this.state.toggle ? "dropLinks show-nav" : "dropLinks"}>
                    {
                        productOptions.productOptions.map((type, i) => {
                        return ( <li key ={i} className='navOptions'><NavLink to= {type.link}  style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'red', textDecoration: 'none'}} >{type.text}</NavLink></li> )
                        })
                    }
                </ul>
            </div>
            
      );
    }
}

export default ProductOptions;