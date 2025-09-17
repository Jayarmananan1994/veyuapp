import { mockOutfitData, fallbackOutfits, generatePersonalizedReasons } from '../data/mockOutfits';

// Simulate network delay
const simulateNetworkDelay = (min = 2000, max = 3500) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Mock API service
export const mockOutfitAPI = {
  async generateOutfit(userInputs) {
    console.log('Mock API: Generating outfit with inputs:', userInputs);
    
    // Simulate network delay
    await simulateNetworkDelay();
    
    // Extract user preferences
    const { 
      imageFile, 
      height, 
      weight, 
      occasion, 
      desiredEffect = [] 
    } = userInputs;
    
    // Find matching outfit based on occasion and desired effect
    let selectedOutfit = null;
    
    // Try to find exact match for occasion and first desired effect
    if (occasion && desiredEffect.length > 0) {
      const occasionOutfits = mockOutfitData[occasion];
      if (occasionOutfits) {
        const primaryEffect = desiredEffect[0];
        selectedOutfit = occasionOutfits[primaryEffect];
      }
    }
    
    // If no exact match, try fallback with occasion only
    if (!selectedOutfit && occasion) {
      const occasionOutfits = mockOutfitData[occasion];
      if (occasionOutfits) {
        // Get first available outfit for this occasion
        const availableOutfits = Object.values(occasionOutfits);
        selectedOutfit = availableOutfits[0];
      }
    }
    
    // If still no match, use fallback outfit
    if (!selectedOutfit) {
      selectedOutfit = fallbackOutfits[0];
    }
    
    // Create a copy to avoid mutating original data
    const outfit = { ...selectedOutfit };
    
    // Personalize the outfit based on user inputs
    outfit.reasons = generatePersonalizedReasons(userInputs, outfit.reasons);
    
    // Add user context to appreciation message
    if (height || weight) {
      outfit.appreciationMessage = `${outfit.appreciationMessage} This look is perfectly tailored for you.`;
    }
    
    // Simulate occasional API failures (5% chance)
    if (Math.random() < 0.05) {
      throw new Error('Unable to generate recommendation. Please try again.');
    }
    
    console.log('Mock API: Generated outfit:', outfit);
    
    return {
      success: true,
      data: outfit,
      userInputs: {
        height,
        weight, 
        occasion,
        desiredEffect,
        hasImage: !!imageFile
      },
      generatedAt: new Date().toISOString()
    };
  },

  async getAlternativeOutfit(currentOutfitId, userInputs) {
    console.log('Mock API: Getting alternative outfit for ID:', currentOutfitId);
    
    // Simulate shorter delay for alternatives
    await simulateNetworkDelay(1000, 2000);
    
    const { occasion, desiredEffect = [] } = userInputs;
    
    // Find alternative outfits for the same occasion
    let alternatives = [];
    
    if (occasion && mockOutfitData[occasion]) {
      alternatives = Object.values(mockOutfitData[occasion])
        .filter(outfit => outfit.id !== currentOutfitId);
    }
    
    // If no alternatives in same occasion, get from other occasions
    if (alternatives.length === 0) {
      alternatives = Object.values(mockOutfitData)
        .flatMap(occasionOutfits => Object.values(occasionOutfits))
        .filter(outfit => outfit.id !== currentOutfitId);
    }
    
    // Add fallback outfits
    alternatives.push(...fallbackOutfits.filter(outfit => outfit.id !== currentOutfitId));
    
    // Select random alternative
    const randomIndex = Math.floor(Math.random() * alternatives.length);
    const selectedAlternative = alternatives[randomIndex] || fallbackOutfits[0];
    
    // Personalize the alternative
    const outfit = { ...selectedAlternative };
    outfit.reasons = generatePersonalizedReasons(userInputs, outfit.reasons);
    
    return {
      success: true,
      data: outfit,
      generatedAt: new Date().toISOString()
    };
  }
};