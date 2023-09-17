import { type FC, createContext, useContext, type ReactNode, useState } from 'react';

interface SelectedCoordinatesContextType {
  selectedCoordinates: number[] | null;
  selectedAddress: string | null;
  updateSelectedCoordinates: (coordinates: number[] | null, address: string | null) => void;
}

const SelectedCoordinatesContext = createContext<SelectedCoordinatesContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedCoordinates = (): SelectedCoordinatesContextType => {
  const context = useContext(SelectedCoordinatesContext);

  if (context === undefined) {
    throw new Error('useSelectedCoordinates must be used within a SelectedCoordinatesProvider');
  }

  return context;
};

interface SelectedCoordinatesProviderProps {
  children: ReactNode;
}

export const SelectedCoordinatesProvider: FC<SelectedCoordinatesProviderProps> = ({ children }) => {
  const [selectedCoordinates, setSelectedCoordinates] = useState<number[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const updateSelectedCoordinates = (coordinates: number[] | null, address: string | null): void => {
    setSelectedCoordinates(coordinates);
    setSelectedAddress(address);
  }
  return (
    <SelectedCoordinatesContext.Provider value={{ selectedCoordinates, selectedAddress, updateSelectedCoordinates }}>
      {children}
    </SelectedCoordinatesContext.Provider>
  );
};

