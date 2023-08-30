interface Config {
  headers: {
    Authorization: string
  }
}

const getConfig = (): Config => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
})

export default getConfig
