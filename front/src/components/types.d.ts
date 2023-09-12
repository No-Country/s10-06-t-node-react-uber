export interface DirectionsData {
  routes: Array<{
    tiempo: number | undefined
    distancia: number | undefined
    precioPremiun: number | undefined
    precioStandar: number | undefined
    geometry: string
  }>
  waypoints: Array<{
    location: number[]
  }>
}

export interface DataInfo {
  precioStandar?: number
  precioPremiun?: number
  distancia?: number
  tiempo?: number
}

export interface MapViewProps {
  geometry: string
  startCoords: number[]
  finishCoords: number[]
}
