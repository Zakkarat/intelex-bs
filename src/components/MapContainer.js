import React from 'react'
import { MapStyles } from '../stylesheets/style-components'

const MapContainer = () => {
  return (<MapStyles><div id="map-container-google-8" class="z-depth-2-half map-container">
    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
      allowfullscreen></iframe>
  </div></MapStyles>)
}

export default MapContainer;