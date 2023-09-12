import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import polyline from '@mapbox/polyline'
import { useNavigate } from 'react-router-dom'
import { type MapViewProps } from '../types'

const MAPBOX_TOKEN: string = import.meta.env.VITE_MAPBOX_TOKEN

export const MapView: React.FC<MapViewProps> = ({
  geometry,
  startCoords,
  finishCoords,
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 11,
    })

    return () => {
      map.remove()
    }
  }, [navigate])

  useEffect(() => {
    // Verificar si las coordenadas han sido obtenidas
    if (startCoords.length > 0 && finishCoords.length > 0) {
      // Decodificar la geometría usando @mapbox/polyline
      const coordinates = polyline.decode(geometry).map((coord) => {
        return [coord[1], coord[0]]
      })

      // Crear un nuevo mapa centrado en las coordenadas obtenidas
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 11,
        center: [
          (startCoords[0] + finishCoords[0]) / 2,
          (startCoords[1] + finishCoords[1]) / 2,
        ],
      })
      const bounds = coordinates.reduce((bounds, coord) => {
        const lngLatLike = { lng: coord[0], lat: coord[1] }
        return bounds.extend(lngLatLike)
      }, new mapboxgl.LngLatBounds())

      // Ajustar el mapa para que encaje en los límites de la ruta
      map.fitBounds(bounds, {
        padding: 40, // Puedes ajustar este valor para agregar un espacio adicional alrededor de la ruta
      })
      // Agregar la ruta al mapa
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
        map.addSource('start', {
          type: 'geojson',
          data: {
            type: 'Point',
            coordinates: startCoords,
          },
        })

        map.addLayer({
          id: 'start',
          type: 'circle',
          source: 'start',
          paint: {
            'circle-radius': 10,
            'circle-color': '#7A37A8',
          },
        })

        new mapboxgl.Marker()
          .setLngLat([finishCoords[0], finishCoords[1]] as [number, number])
          .addTo(map)
      })
    }
  }, [startCoords, finishCoords, geometry])

  return <div id='map' className='h-full w-full'></div>
}
