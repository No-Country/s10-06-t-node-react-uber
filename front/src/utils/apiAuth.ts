export const BASE_URL =
  'https://uber-project-nocountry-backend-production.up.railway.app/api'

const checkServerResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject('Возникла ошибка')
}

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

interface RegisterEmail {
  email: string
}

interface RegisterCode {
  email: string
  verificationCode: string
}

export const register = ({ email }: RegisterEmail) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email }),
  }).then((res) => checkServerResponse(res))
}

export const verifyCodigo = ({ email, verificationCode }: RegisterCode) => {
  return fetch(`${BASE_URL}/emailVerification`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ email, verificationCode }),
  }).then((res) => checkServerResponse(res))
}
