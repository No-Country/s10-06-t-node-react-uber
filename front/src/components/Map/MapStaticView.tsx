import { type FC, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXZpdG9yaW5vMjgiLCJhIjoiY2xtNThiczQ0MTZpYzNjbGY1ZW9hdmtzNiJ9.AajOUn50y9APlLV38AGowg';

export const MapStaticView: FC = () => {
    
    useEffect(() => {
        let map: mapboxgl.Map | null;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: [longitude, latitude],
                    zoom: 13,
                });

                const geolocate = new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    trackUserLocation: true,
                    showUserLocation: true,
                });

                map.addControl(geolocate);
            },
            (error) => {
                console.error('Error de geolocalización:', error);
            }
        );

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, []);

    return (
        <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    );
}; 
