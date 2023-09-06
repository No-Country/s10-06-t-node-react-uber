export const parseChatDate = (date: Date): string => {
  const today = new Date()
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))

  if (date.getDate() === today.getDate()) {
    return `${date.getHours()}:${date.getMinutes()}`
  }

  if (date.getDate() === yesterday.getDate()) {
    return 'Ayer'
  }

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')

  return `${day}/${month}`
}
