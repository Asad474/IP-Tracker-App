import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import 'leaflet/dist/leaflet.css';
 
const Map = props => {
    const zoomLevel = 15;
    
    return (
        <MapContainer 
            zoom={zoomLevel} 
            center={props.position}
            className="w-full h-screen"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <LocationMarker position={props.position} />
        </MapContainer>
    );
};

export default Map;