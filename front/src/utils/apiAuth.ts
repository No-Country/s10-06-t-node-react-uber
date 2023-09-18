import { BASE_URL } from './api'

const checkServerResponse = async (res: Response): Promise<void> => {
  if (res.ok) {
    return await res.json()
  }
  const error = await res.json()
  throw new Error(error.message)
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

interface RegisterData {
  email: string
  verificationCode: string
  firstName: string
  lastName: string
  cellNumber: string
  password: string
}

export const register = async ({ email }: RegisterEmail): Promise<void> => {
  await fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email }),
  }).then(async (res) => {
    await checkServerResponse(res)
  })
}

export const verifyCodigo = async ({
  email,
  verificationCode,
}: RegisterCode): Promise<void> => {
  await fetch(`${BASE_URL}/api/emailVerification`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ email, verificationCode }),
  }).then(async (res) => {
    await checkServerResponse(res)
  })
}

export const submitData = async ({
  email,
  verificationCode,
  firstName,
  lastName,
  cellNumber,
  password,
}: RegisterData): Promise<void> => {
  await fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      verificationCode,
      firstName,
      lastName,
      cellNumber,
      password,
    }),
  }).then(async (res) => {
    await checkServerResponse(res)
  })
}
