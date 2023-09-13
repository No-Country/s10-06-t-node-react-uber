import { type FC, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { geolocation, type UserGeolocation } from '@/utils/geolocation';

const MAPBOX_TOKEN: string = import.meta.env.VITE_MAPBOX_TOKEN;

export const MapStaticView: FC = () => {
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
                userLocation.userLongitude ?
                    [ userLocation.userLongitude ?? 0, userLocation.userLatitude ?? 0 ] :
                    [ userLocation.userLongitudePerIp ?? 0, userLocation.userLatitudePerIp ?? 0 ];

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v12',
                center: centerCoordinates,
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

            return () => {
                if (map) {
                    map.remove();
                }
            };
        }
    }, [ userLocation ]);

    return (
        <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    );
};
