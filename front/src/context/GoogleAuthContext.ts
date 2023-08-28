import { create } from 'zustand'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../services/firebase.config'

interface AuthState {
  user: unknown
  setUser: (user: unknown) => void
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => {
    set(() => ({ user }))
  },
  signInWithGoogle: async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)
      if (user.displayName) {
        const fullName = user.displayName
        const names = fullName.split(' ')

        let name = names[0]
        let lastName = ''

        if (names.length > 2) {
          lastName = names[names.length - 1]
          name = names.slice(0, names.length - 1).join(' ')
        } else if (names.length === 2) {
          name = names[0]
          lastName = names[1]
        } else {
          name = names[0]
        }

        // mandar al backend el usuario
        const res = await fetch(
          'https://s10-06-t-node-react-uber-production.up.railway.app/api/registerLogin',
          {
            method: 'POST',
            body: JSON.stringify({
              email: user.email,
              name,
              lastName,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        const data = await res.json()
        const token = data.token
        localStorage.setItem('token', token)
        window.location.href = '/profile'
      }

      set(() => ({ user }))
    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
  },
  signOut: async () => {
    try {
      await signOut(auth)
      set(() => ({ user: null }))
      localStorage.clear()
      window.location.reload()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  },
}))
