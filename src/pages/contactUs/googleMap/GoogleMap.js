import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }

render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 36.196210 }
            lng={ -85.467600 }
            text={ 'Mutt Nut Dog Treats' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap;