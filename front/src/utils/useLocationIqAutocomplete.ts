import locationIqAccessToken from './locationIqAccessToken'
import locationIqApiBaseUrl from './locationIqApi'
import usePosiblesLocationStore from '@/stateManagement/usePosiblesLocationStore'

async function useLocationIqAutocomplete(): Promise<T> {
  const { setPosiblesLocation } = usePosiblesLocationStore((state) => state)
  await fetch(
    `${locationIqApiBaseUrl}/autocomplete?key=${locationIqAccessToken}&q=${inputFinishLocationValue}`,
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
      setPosiblesLocation(data, 'inputFinishLocation')
    })
    .catch((error) => {
      console.log(error)
    })
}

export default useLocationIqAutocomplete
