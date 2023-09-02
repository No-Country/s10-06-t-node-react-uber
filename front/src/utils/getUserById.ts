import { BASE_URL } from '@/utils/api';

interface UserData {
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string | null,
  dateOfBirthUnformatted: Date,
  nationality: string | null,
  cellNumber: string | null
}

export const fetchData = async (): Promise<UserData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/users/id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: localStorage.getItem('token') })
    });

    const responseData = await response.json();

    if (response.ok) {
      const transformedData = {
        ...responseData,
        dateOfBirth: responseData.dateOfBirth ?
          new Date(responseData.dateOfBirth).toISOString().slice(0, 10)
          :
          null,
        dateOfBirthUnformatted: responseData.dateOfBirth
      };
      return transformedData;
    } else {
      console.error('Error en la respuesta:', responseData);
      return null;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return null;
  }
};
