import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const mapStyles = {
    width: '300px',
    height: '125px',
    'border-radius': '25px'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} style={mapStyles} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Ivano-Fraankivsk</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAkTY8iQ9hM7KsjZg-G5CbUZloXzHorFaE"
})(MapContainer)