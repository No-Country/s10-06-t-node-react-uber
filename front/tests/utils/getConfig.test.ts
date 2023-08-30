import getConfig from '@/utils/getConfig'

describe('Tests on utils/getConfig', () => {
  it('should get config', () => {
    expect(getConfig()).toEqual({
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
  })
})
