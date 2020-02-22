import React,{Component} from 'react';
import Map from './map'

export default class MapBox extends Component{
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
          <div>
              <Map lat = {this.state.markerPosition.lat} lng = {this.state.markerPosition.lng} />
          </div>
        );
      }    
}