import { type FC, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useSelectedCoordinates } from '@/context/SelectedCoordinatesContext';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXZpdG9yaW5vMjgiLCJhIjoiY2xtNThiczQ0MTZpYzNjbGY1ZW9hdmtzNiJ9.AajOUn50y9APlLV38AGowg';

export const FavoritesMapView: FC = () => {

    const { updateSelectedCoordinates, selectedCoordinates } = useSelectedCoordinates();

    useEffect(() => {
        let map: mapboxgl.Map | null;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords; 

                const centerCoordinates: [number, number] =  
                    selectedCoordinates? 
                        [ selectedCoordinates[0], selectedCoordinates[1] ] : 
                        [ longitude, latitude ];

                map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v12',
                    center: centerCoordinates,
                    zoom: 15,
                });

                const geocoder = new MapboxGeocoder({
                        accessToken: mapboxgl.accessToken,
                        mapboxgl, 
                        marker: false, 
                        placeholder: 'Buscar',
                        proximity: {
                            longitude,
                            latitude
                        } 
                    });

                map.addControl(geocoder);

                geocoder.on('result', (e) => {
                    const selectedCoordinates = e.result.center;
                    const selectedAddress = e.result.place_name;
                    updateSelectedCoordinates(selectedCoordinates, selectedAddress);
                });

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
    }, [updateSelectedCoordinates, selectedCoordinates]);

    return (
        <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    );
};