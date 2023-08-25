import React, {useEffect} from 'react';
import {useMap, Marker} from 'react-leaflet';
import icon from './icon';

const LocationMarker = props => {
    const map = useMap();

    useEffect(() => {
        map.flyTo(props.position, map.getZoom(), {
          animate: true,
        })
    }, [map, props.position]);
        
    return (
        <Marker position={props.position} icon={icon}></Marker>
    );
};

export default LocationMarker;