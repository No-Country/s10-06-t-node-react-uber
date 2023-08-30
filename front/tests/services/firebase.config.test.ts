import { firebaseConfig } from '@/services/firebase.config'

describe('firebase.config.ts', () => {
  it('should have a apiKey', () => {
    expect(firebaseConfig.apiKey.length).toBeGreaterThan(0)
  })

  it('should have a authDomain', () => {
    expect(firebaseConfig.authDomain.length).toBeGreaterThan(0)
  })

  it('should have a projectId', () => {
    expect(firebaseConfig.projectId.length).toBeGreaterThan(0)
  })

  it('should have a storageBucket', () => {
    expect(firebaseConfig.storageBucket.length).toBeGreaterThan(0)
  })

  it('should have a messagingSenderId', () => {
    expect(firebaseConfig.messagingSenderId.length).toBeGreaterThan(0)
  })

  it('should have a appId', () => {
    expect(firebaseConfig.appId.length).toBeGreaterThan(0)
  })
})
