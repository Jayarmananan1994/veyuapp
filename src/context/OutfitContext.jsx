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
      // Import the API service dynamically to avoid circular dependencies
      const { mockOutfitAPI } = await import('../services/outfitAPI');
      const result = await mockOutfitAPI.generateOutfit(userInputs);
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