import locationIqAccessToken from './locationIqAccessToken'
import locationIqApiBaseUrl from './locationIqApi'
import usePosiblesLocationStore from '@/stateManagement/usePosiblesLocationStore'
import type { typeLocationIQAutocompleteData } from '@/components/common/LocationAutocomplete'

async function useLocationIqAutocomplete(
  posiblesLocationFrom: 'inputFinishLocation' | 'inputStartLocation',
  value: string,
): Promise<any> {
  const { setPosiblesLocation } = usePosiblesLocationStore((state) => state)
  await fetch(
    `${locationIqApiBaseUrl}/autocomplete?key=${locationIqAccessToken}&q=${value}`,
  )
    .then(async (response) => await response.json())
    .then((data) => {
      if (data.error) {
        console.log('error')
      } else {
        return data
      }
    })
    .then((data: typeLocationIQAutocompleteData | undefined) => {
      setPosiblesLocation(data, posiblesLocationFrom)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default useLocationIqAutocomplete
