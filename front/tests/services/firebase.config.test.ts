import { firebaseConfig } from '@/services/firebase.config'

describe('Tests on services/firebase.config.ts', () => {
  it('should have a apiKey', () => {
    expect(firebaseConfig.apiKey).toBeDefined()
    expect(firebaseConfig.apiKey.length).toBeGreaterThan(0)
  })

  it('should have a authDomain', () => {
    expect(firebaseConfig.authDomain).toBeDefined()
    expect(firebaseConfig.authDomain.length).toBeGreaterThan(0)
  })

  it('should have a projectId', () => {
    expect(firebaseConfig.projectId).toBeDefined()
    expect(firebaseConfig.projectId.length).toBeGreaterThan(0)
  })

  it('should have a storageBucket', () => {
    expect(firebaseConfig.storageBucket).toBeDefined()
    expect(firebaseConfig.storageBucket.length).toBeGreaterThan(0)
  })

  it('should have a messagingSenderId', () => {
    expect(firebaseConfig.messagingSenderId).toBeDefined()
    expect(firebaseConfig.messagingSenderId.length).toBeGreaterThan(0)
  })

  it('should have a appId', () => {
    expect(firebaseConfig.appId).toBeDefined()
    expect(firebaseConfig.appId.length).toBeGreaterThan(0)
  })
})
