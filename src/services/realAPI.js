// Real API service for development environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000;
const ENABLE_LOGGING = import.meta.env.VITE_ENABLE_API_LOGGING === 'true';

export const realOutfitAPI = {
  async generateOutfit(userInputs) {
    if (ENABLE_LOGGING) {
      console.log('Real API: Generating outfit with inputs:', userInputs);
    }
    
    try {
      // Create FormData for multipart/form-data request
      const formData = new FormData();
      
      // Add image file if provided
      if (userInputs.imageFile) {
        formData.append('imageFile', userInputs.imageFile);
      }
      
      // Add other form fields
      if (userInputs.height) {
        formData.append('height', userInputs.height);
      }
      
      if (userInputs.weight) {
        formData.append('weight', userInputs.weight);
      }
      
      if (userInputs.occasion) {
        formData.append('occasion', userInputs.occasion);
      }
      
      // Handle desired effects - send first one or concatenate multiple
      if (userInputs.desiredEffect && userInputs.desiredEffect.length > 0) {
        // Send the first desired effect as per API format
        formData.append('desiredEffect', userInputs.desiredEffect[0]);
      }
      
      // Handle styling preferences and additional notes
      let additionalNote = '';
      
      // Add styling preferences to additional notes
      if (userInputs.stylingPreferences && userInputs.stylingPreferences.length > 0) {
        additionalNote += `Styling preferences: ${userInputs.stylingPreferences.join(', ')}. `;
      }
      
      // Add user's additional notes
      if (userInputs.additionalNotes) {
        additionalNote += userInputs.additionalNotes;
      }
      
      if (additionalNote.trim()) {
        formData.append('additionalNote', additionalNote.trim());
      }
      
      if (ENABLE_LOGGING) {
        console.log('Sending request to:', `${API_BASE_URL}/generateRecommendation`);
      }
      
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);
      
      // Make the API request
      const response = await fetch(`${API_BASE_URL}/generateRecommendation`, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
        // Don't set Content-Type header - let browser set it for FormData
      });
      
      clearTimeout(timeoutId);
      
      if (ENABLE_LOGGING) {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        console.log('Response content-type:', response.headers.get('content-type'));
      }
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
      }
      
      const responseText = await response.text();
      if (ENABLE_LOGGING) {
        console.log('Raw response text:', responseText);
      }
      
      let result;
      try {
        result = JSON.parse(responseText);
        if (ENABLE_LOGGING) {
          console.log('Parsed API response:', result);
        }
      } catch (parseError) {
        console.error('Failed to parse JSON response:', parseError);
        console.error('Response text was:', responseText);
        throw new Error('Invalid JSON response from API');
      }
      
      // Validate response structure
      if (!result || typeof result !== 'object') {
        throw new Error('Invalid response format: expected object');
      }
      
      if (ENABLE_LOGGING) {
        console.log('Response validation - has whyItWorks:', !!result.whyItWorks);
        console.log('Response validation - has reasons:', !!result.reasons);
        console.log('Response validation - has appreciationMessage:', !!result.appreciationMessage);
        console.log('Response validation - has generatedImage:', !!result.generatedImage);
        if (result.generatedImage) {
          console.log('GeneratedImage has imageData:', !!result.generatedImage.imageData);
          console.log('GeneratedImage has mimeType:', !!result.generatedImage.mimeType);
        }
      }
      
      // Transform the response to match our expected format
      const transformedResult = {
        success: true,
        data: {
          id: Date.now(), // Generate a unique ID
          styleName: getStyleNameFromEffect(userInputs.desiredEffect?.[0]),
          occasion: userInputs.occasion || 'Custom',
          desiredEffect: userInputs.desiredEffect?.[0] || 'Custom Style',
          image: result.generatedImage && result.generatedImage.imageData ? 
            `data:${result.generatedImage.mimeType || 'image/png'};base64,${result.generatedImage.imageData}` : 
            null,
          whyItWorks: Array.isArray(result.whyItWorks || result.reasons) ? (result.whyItWorks || result.reasons).map((text, index) => ({
            icon: getReasonIcon(index),
            text: text
          })) : [],
          appreciationMessage: result.appreciationMessage || "We hope you love this look!"
        },
        userInputs: userInputs,
        generatedAt: new Date().toISOString()
      };
      
      if (ENABLE_LOGGING) {
        console.log('Transformed result:', transformedResult);
      }
      
      return transformedResult;
      
    } catch (error) {
      console.error('Real API Error:', error);
      throw new Error(`Failed to generate outfit recommendation: ${error.message}`);
    }
  }
};

// Helper function to get style name from desired effect
function getStyleNameFromEffect(effect) {
  const styleMap = {
    'Effortless Chic': 'Effortless Chic',
    'Casual Confidence': 'Casual Confidence',
    'Classic Elegance': 'Classic Elegance',
    'Romantic Glam': 'Romantic Glam',
    'Bohemian Muse': 'Bohemian Muse',
    'Powerful Professional': 'Powerful Professional',
    'Modern Sophistication': 'Modern Sophistication',
    'Eco-Conscious Appeal': 'Eco-Conscious Appeal',
    'Gender-Neutral Expression': 'Gender-Neutral Expression',
    'Athleisure Sophistication': 'Athleisure Sophistication',
    'Preppy Academia': 'Preppy Academia',
    'Bold Statement': 'Bold Statement',
    'Sexy Flex': 'Sexy Flex',
    'Edgy Avant-Garde': 'Edgy Avant-Garde',
    'Glamorous Diva': 'Glamorous Diva'
  };
  
  return styleMap[effect] || effect || 'Custom Style';
}

// Helper function to get appropriate icon for reason index
function getReasonIcon(index) {
  const icons = ['palette', 'accessibility_new', 'celebration', 'style', 'star', 'favorite'];
  return icons[index % icons.length];
}