import { type FC, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useSelectedCoordinates } from '@/context/SelectedCoordinatesContext';
import { geolocation, type UserGeolocation } from '@/utils/geolocation';

const MAPBOX_TOKEN: string = import.meta.env.VITE_MAPBOX_TOKEN;

export const FavoritesMapView: FC = () => {

    const { updateSelectedCoordinates, selectedCoordinates } = useSelectedCoordinates();
    const [ userLocation, setUserLocation ] = useState<UserGeolocation | null>(null);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const userGeolocation = await geolocation();
                setUserLocation(userGeolocation);
            } catch (error) {
                console.error('Error al obtener la geolocalización:', error);
            }
        };

        if (!userLocation) {
            void fetchData();
        } else {

            mapboxgl.accessToken = MAPBOX_TOKEN;

            const centerCoordinates: [number, number] =  
                selectedCoordinates? 
                    [ selectedCoordinates[0] ?? 0, selectedCoordinates[1] ?? 0 ] : 
                    userLocation.userLongitude?
                        [ userLocation.userLongitude ?? 0, userLocation.userLatitude ?? 0 ] :
                        [ userLocation.userLongitudePerIp ?? 0, userLocation.userLatitudePerIp ?? 0 ];

            const map = new mapboxgl.Map({
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
                    longitude: userLocation.userLongitude ?? userLocation.userLongitudePerIp ?? 0,
                    latitude: userLocation.userLatitude ?? userLocation.userLatitudePerIp ?? 0
                } 
            });

            map.addControl(geocoder);

            geocoder.on('result', (e) => {
                const selectedCoordinates = e.result.center;
                const selectedAddress = e.result.place_name;
                updateSelectedCoordinates(selectedCoordinates, selectedAddress);
            });

            return () => {
                if (map) {
                    map.remove();
                }
            };
        }
    }, [ userLocation, selectedCoordinates, updateSelectedCoordinates ]);

    return (
        <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    );
};