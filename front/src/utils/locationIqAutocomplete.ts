import locationIqAccessToken from './locationIqAccessToken';
import locationIqApiBaseUrl from './locationIqApi';
import type { typeLocationIQAutocompleteData } from '@/components/common/LocationAutocomplete';
import type { typePosiblesLocationState } from '@/context/usePosibleLocationStore';

interface Coordinates {
  latitude: number;
  longitude: number;
};

let searchTimeout: NodeJS.Timeout | null = null;

async function locationIqAutocomplete(
  posiblesLocationFrom: 'inputFinishLocation' | 'inputStartLocation',
  value: string,
  setPosiblesLocation: typePosiblesLocationState['setPosiblesLocation'],
): Promise<void> {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  };

  searchTimeout = setTimeout(async () => {
    try {
      const getCurrentLocation = async (): Promise<Coordinates> => {
        return await new Promise<Coordinates>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(error);
            }
          );
        });
      };
      
      const currentLocation = await getCurrentLocation();
      const viewbox = `${currentLocation.longitude - 0.5},${currentLocation.latitude - 0.5},${currentLocation.longitude + 0.5},${currentLocation.latitude + 0.5}`;

      const url = `${locationIqApiBaseUrl}/autocomplete?key=${locationIqAccessToken}&q=${value}&viewbox=${viewbox}&bounded=1&limit=8`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        console.log('Error:', data.error);
      } else {
        setPosiblesLocation(data as typeLocationIQAutocompleteData, posiblesLocationFrom);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, 600);
}


export default locationIqAutocomplete;
