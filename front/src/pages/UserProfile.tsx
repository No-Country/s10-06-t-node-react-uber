import { useAuthStore } from '@/context/GoogleAuthContext'
export const UserProfile: React.FC = () => {
  const { user, signOut } = useAuthStore()

  return (
    <div className='flex items-center justify-between p-5'>
      {user?.firstName ? `Welcome ${user.firstName} ${user.lastName}` : ''}
      {user?.firstName ? (
        <button className='rounded border px-5 py-1' onClick={signOut}>
          Cerrar sesión
        </button>
      ) : (
        ''
      )}
    </div>
  )
}
