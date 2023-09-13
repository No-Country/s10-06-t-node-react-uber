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

interface PaymentData {
  idUsuario: string
  idConductor: string
  idViaje: string
  token: string
  amount: string
  metodo: string
  fecha: string
}

export const submitPayment = async ({
  idUsuario,
  idConductor,
  idViaje,
  token,
  amount,
  fecha,
}: PaymentData): Promise<void> => {
  await fetch(`${BASE_URL}/payment`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      idUsuario,
      idConductor,
      idViaje,
      token,
      amount,
      fecha,
    }),
  }).then(async (res) => {
    await checkServerResponse(res)
  })
}
