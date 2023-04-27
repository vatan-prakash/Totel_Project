import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 51.505,
    lng: -0.09
  };

  const onLoad = marker => {
    console.log('marker: ', marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB8L0vEfIYm8dtYH5NzUhXPLa0wjDz4diI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker onLoad={onLoad} position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;