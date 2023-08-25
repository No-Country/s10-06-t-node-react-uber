import { useAuthStore } from '@/context/AuthContext'

export const LoginGoogleButton: React.FC = () => {
  const { signInWithGoogle } = useAuthStore()

  return (
    <div
      onClick={signInWithGoogle}
      className='flex cursor-pointer items-center justify-center gap-5 rounded border border-zinc-200 px-5 py-2 text-12 text-zinc-500 shadow hover:bg-slate-100'
    >
      <img
        src='https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png'
        alt='google'
        className='h-5 w-5'
      />
      Iniciar sesión con Google
    </div>
  )
}
