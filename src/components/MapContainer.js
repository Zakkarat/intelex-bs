import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { MapStyles } from '../stylesheets/style-components'

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} style={mapStyles} zoom={14}>

//         <Marker style={mapStyles} onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         <InfoWindow style={mapStyles} onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>Ivano-Fraankivsk</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAkTY8iQ9hM7KsjZg-G5CbUZloXzHorFaE"
// })(MapContainer)

const MapContainer = () => {

  return (<MapStyles><div id="map-container-google-8" class="z-depth-2-half map-container">
    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
      allowfullscreen></iframe>
  </div></MapStyles>)
}

export default MapContainer;