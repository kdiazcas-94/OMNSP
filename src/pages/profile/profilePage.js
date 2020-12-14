import React, { Component } from 'react';
import tempProfilePicture from './tempProfilePicture.png';

class profilePage extends Component {
    render(){
      return (
        <div className='body'>
          <div className="profileWrapper">
              <img src={tempProfilePicture} alt="tempProfilePicture" />
              <h1>John Smith</h1>
              <h2>Bio</h2>
              <p>ajshdjwqhoiawhjdoiawjiwojdawjwpdjawo[dpakwosk[aokd[ owka[odkawo w[ aw[okd [</p>
          </div>
        </div>
      );
    }
}
export default profilePage;

