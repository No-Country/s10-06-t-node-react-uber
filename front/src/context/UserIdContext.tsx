import { type FC, createContext, useContext, type ReactNode, useState } from 'react';

interface UserIdContextType {
  userId: string | null;
  updateUserId: ( id: string | null ) => void;
}

const UserIdContext= createContext<UserIdContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useUserId = (): UserIdContextType => {
  const context = useContext(UserIdContext);

  if (context === undefined) {
    throw new Error('userId must be used within a UserIdProvider');
  }

  return context;
};

interface UserIdProviderProps {
  children: ReactNode;
}

export const UserIdProvider: FC<UserIdProviderProps> = ({ children }) => {
  const [ userId, setUserId ] = useState<string | null>(null);

  const updateUserId = (id: string | null ): void => {
    setUserId(id);
  }
  return (
    <UserIdContext.Provider value={{ userId, updateUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

