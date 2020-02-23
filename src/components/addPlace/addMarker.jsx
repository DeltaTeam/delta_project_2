import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { useRef, useState, useCallback } from "react";
import LocSrc from '../../resourses/Location.svg'
import '../../styles/formstyles.css'


const AbsolutePos = { 
    position: 'absolute',
    height: '60px',
    zIndex: '1',
    marginLeft: 'calc(50% - 30px)',
    marginTop: '195px'
  };
  const AbsolutePosText = { 
    position: 'absolute',
    height: '60px',
    zIndex: '1',
    marginLeft: 'calc(50% - 20px)',
    marginTop: '235px'
  };
  

// const RelativePos = {
//     position: 'absolute',
//     height: '500px',
//     width: '60%',
//     margin: '15px'
// };

  function AddMapMarker(props){
    const [center, setCenter] = useState({ lat: 50.45, lng: 30.53 });
    const refMap = useRef(null);
    const handleBoundsChanged = () => {
      const mapCenter = refMap.current.getCenter(); //get map center
      setCenter(mapCenter);
    };
      
    
    return (
        <div className = 'leftBox'>
            <img src = {LocSrc} style = {AbsolutePos}/>
            <div style = {AbsolutePosText} >
            <p id = 'x'>{center.lat}</p>
            <p id = 'y'>{center.lng}</p>
            </div>
            
            <Map
                google={props.google}
                zoom={15}
                onDragend={
                  (mapProps, map) =>{
                    setCenter({ lat: map.center.lat(), lng: map.center.lng() });
                    
                    // setMarkerPosition({ lat: map.center.lat(), lng: map.center.lng() })
                    // console.log(center.lat,center.lng)
                  }
                }
                initialCenter = {{lat: center.lat, lng: center.lng}}
                >
            </Map>
            
        </div>

    );
}

function Coords(lat, lng) {
return <span id = 'coords'>
  {lat},{lng} 
</span>
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmz9394BTvTBtc96jDUhelO6Ssf7rXvMw'
})(AddMapMarker)