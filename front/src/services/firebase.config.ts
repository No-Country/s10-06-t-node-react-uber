import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyBpqfwDLjf1zMElC0ryZJ_VFB_l0dYaCa4',
  authDomain: 'loginwith-c1c73.firebaseapp.com',
  projectId: 'loginwith-c1c73',
  storageBucket: 'loginwith-c1c73.appspot.com',
  messagingSenderId: '443857964417',
  appId: '1:443857964417:web:9cec55289b6a51c334ec80',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
