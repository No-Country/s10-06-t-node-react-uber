import { BASE_URL } from '@/utils/api'

describe('Tests on utils/api', () => {
  it('should get url from env', () => {
    if (import.meta.env.VITE_API_BASE_URL) {
      expect(BASE_URL).toBe(import.meta.env.VITE_API_BASE_URL)
    } else {
      expect(BASE_URL).toBe('http://localhost:1237')
    }
  })
})
