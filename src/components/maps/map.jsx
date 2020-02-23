import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react';


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      markerPosition: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    };
  }
  
  
  render() {
    console.log(this.state.lat)
    return (
      <Map
      // style = {containerStyle}
      google={this.props.google}
      zoom={15}
      // style={mapStyles}
      initialCenter={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng}}
    >
      <Marker position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng}} />
    </Map>
    );
  }
}
function getBounds(){
  var points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 },
    { lat: 42.05, lng: -77.02 }
  ]
  var bounds = new this.props.google.maps.LatLngBounds();
  for (var i = 0; i < points.length; i++) {
  bounds.extend(points[i]);
  }
  return bounds;
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmz9394BTvTBtc96jDUhelO6Ssf7rXvMw'
})(MapContainer)