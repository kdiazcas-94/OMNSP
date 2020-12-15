import React, { Component } from 'react';
import leep from '../../components/Images/LEEP.jpg';
import OMN from '../../components/Images/OMN.jpg';
import OMNSplashRotator from '../../components/Images/OMNSplashRotator-6.png';

class HomePage extends Component {
    render(){
      return (
        <div className='body'>
          <div className="homeWrapper">
            <div className="gallery">
            <div className="bigPic2">
              <img src={leep} alt="leep" />
              <img src={OMN} alt="OMN" />
              </div>
            </div>
            <div className="gallery">
              <div className="bigPic">
              <img src={OMNSplashRotator} alt="OMNSplashRotator" /> 
              </div>
            </div>
          </div>
          

        
           
        </div>
      );
    }
}
export default HomePage;

