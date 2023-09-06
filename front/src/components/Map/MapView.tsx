import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import polyline from '@mapbox/polyline'

export const MapView: React.FC = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibHVjYXZpdG9yaW5vMjgiLCJhIjoiY2xtNThiczQ0MTZpYzNjbGY1ZW9hdmtzNiJ9.AajOUn50y9APlLV38AGowg'

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 11,
      center: [-58.37723, -34.61315], // mapa centrado por defecto en Buenos Aires
    })

    // validacion para centrar el mapa en la ubicacion del usuario
    if ('geolocation' in navigator) {
      void navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          if (permissionStatus.state === 'granted') {
            // El usuario ya ha dado permiso, obtener la ubicación y centrar el mapa
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const userCoordinates = [
                  position.coords.longitude,
                  position.coords.latitude,
                ]

                // Centrar el mapa en la ubicación del usuario
                map.setCenter([userCoordinates[0], userCoordinates[1]])
                map.setCenter([-58.424188, -34.580534])

                // Agregar un marcador en la ubicación del usuario
                // new mapboxgl.Marker()
                //   .setLngLat([userCoordinates[0], userCoordinates[1]])
                //   .addTo(map)
              },
              (error) => {
                console.error(
                  'Error al obtener la ubicación del usuario:',
                  error,
                )
              },
            )
          }
        })
    }

    const geometryFromBackend =
      'roerEfticJJuBaFpAa{@hBsV{AwW_J_Hp@oFxGqRle@yUn\\aZps@sQb]wBV_DmAaBlFt@dEtXxV~R|Q~AhDdEhB~^v^CnCkErJbDlD' // TODO: obtener la geometría desde el backend

    const coordinates = polyline
      .decode(geometryFromBackend)
      .map((coord: unknown[]) => [Number(coord[1]), Number(coord[0])])

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates,
          },
        },
      })
      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#7A37A8',
          'line-width': 8,
        },
      })
    })

    return () => {
      map.remove()
    }
  }, [])

  return <div id='map' className='h-full w-full'></div>
}
