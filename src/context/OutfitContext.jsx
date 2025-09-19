import { createContext, useContext, useState } from 'react';

const OutfitContext = createContext();

export const useOutfit = () => {
  const context = useContext(OutfitContext);
  if (!context) {
    throw new Error('useOutfit must be used within an OutfitProvider');
  }
  return context;
};

export const OutfitProvider = ({ children }) => {
  const [outfitData, setOutfitData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateOutfit = async (userInputs) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Determine which API to use based on environment variables
      const useMockAPI = import.meta.env.VITE_USE_MOCK_API === 'true';
      const isDevelopment = import.meta.env.DEV;
      
      let result;
      if (useMockAPI || !isDevelopment) {
        // Use mock API if explicitly configured or in production
        const { mockOutfitAPI } = await import('../services/outfitAPI');
        result = await mockOutfitAPI.generateOutfit(userInputs);
      } else {
        // Use real API in development (default)
        const { realOutfitAPI } = await import('../services/realAPI');
        result = await realOutfitAPI.generateOutfit(userInputs);
      }
      
      setOutfitData(result);
      return result;
    } catch (err) {
      setError(err.message || 'Failed to generate outfit recommendation');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const clearOutfit = () => {
    setOutfitData(null);
    setError(null);
  };

  const value = {
    outfitData,
    isLoading,
    error,
    generateOutfit,
    clearOutfit
  };

  return (
    <OutfitContext.Provider value={value}>
      {children}
    </OutfitContext.Provider>
  );
};