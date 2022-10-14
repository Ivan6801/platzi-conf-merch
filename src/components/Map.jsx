/* eslint-disable import/no-duplicates */
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import Icon from '../assets/marker.png';
// import { Icon } from 'leaflet'
// import { Icon } from 'react-leaflet';
import '../styles/components/Map.scss';

const position = [32.495553, -117.033580]; 

function Map() {
  
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        {/* <Popup icon={Icon}> */}
        A pretty CSS3 popup. <br /> Easily customizable.
        {/* </Popup> */}
      </Marker>
    </MapContainer>
  );
}
export default Map;
