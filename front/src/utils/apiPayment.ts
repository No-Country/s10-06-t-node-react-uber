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
  idUsuario: '64f61860500eb464d7b717b7'
  idConductor: '64eea22e93d51227247663b5'
  idViaje: '64ec9fcd68f99ae8049d3a72'
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTRhYzdkNDQzMzQ1NjE4OTc1YTM5YSIsImlhdCI6MTY5Mzg3Mzg4MCwiZXhwIjoxNjkzOTYwMjgwfQ.pvT4EZhC0N2wsJhcoi3YWiSPrdz4JHTXPFVZCQ__qG4'
  amount: 50
  metodo: 'tarjeta'
  fecha: '2023-08-22T12:00:00Z'
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
