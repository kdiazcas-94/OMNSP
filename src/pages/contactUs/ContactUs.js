import React, { Component } from 'react';
import GoogleMap from './googleMap/GoogleMap';
class ContactUs extends Component {
    render(){
      return (
        <div className='contactUs'>
          <br></br>
          (931) 239-2777 <br></br>
          1411 Gibbons Rd, <br>
          </br>Cookeville, TN 38506

           <GoogleMap/>
        </div>
      );
    }
}

export default ContactUs;