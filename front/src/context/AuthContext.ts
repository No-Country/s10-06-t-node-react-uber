import { create } from 'zustand'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../services/firebase.config'

interface AuthState {
  user: any
  setUser: (user: any) => void
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  signInWithGoogle: async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      //mandar al backend el usuario

      set(() => ({ user }))
    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
  },
  signOut: async () => {
    try {
      await signOut(auth)
      set(() => ({ user: null }))
    } catch (error) {
      console.error('Error signing out:', error)
    }
  },
}))
