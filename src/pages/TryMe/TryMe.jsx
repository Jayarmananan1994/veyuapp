import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutfit } from '../../context/OutfitContext.jsx';
import Header from '../../components/Header';
import TryMeHeader from './TryMeHeader';
import PhotoUpload from './PhotoUpload';
import PreferenceForm from './PreferenceForm';
import GenerateButton from './GenerateButton';
import MockLoader from '../../components/MockLoader';

function TryMe() {
  const navigate = useNavigate();
  const { generateOutfit, isLoading, error } = useOutfit();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preferences, setPreferences] = useState({});

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log('Selected file:', file ? file.name : 'No file selected');
  };

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
    console.log('Preferences updated:', newPreferences);
  };

  const handleGenerateOutfit = async () => {
    try {
      // Prepare user inputs for API
      const userInputs = {
        imageFile: selectedFile,
        height: preferences.height,
        weight: preferences.weight,
        occasion: preferences.occasion,
        desiredEffect: preferences.desiredEffect || [],
        additionalNotes: preferences.additionalNotes || 'None',
        noMakeup: preferences.stylingPreferences?.includes('No Makeup') || false,
        noHairChange: preferences.stylingPreferences?.includes('No Hair Change') || false,
        minimalAccessories: preferences.stylingPreferences?.includes('Minimal Accessories') || false,
      };

      console.log('Generating outfit with:', userInputs);
      
      // Call mock API through context
      await generateOutfit(userInputs);
      
      // Navigate to result page on success
      navigate('/result');
      
    } catch (err) {
      console.error('Failed to generate outfit:', err);
      // Error handling is managed by context
    }
  };

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      height: 'auto',
      minHeight: '100vh',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: 'white',
      overflow: 'hidden',
      fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'
    }}>
      <div style={{
        display: 'flex',
        height: '100%',
        flexGrow: 1,
        flexDirection: 'column'
      }}>
        <Header currentPage="Try On" />
        
        <main style={{
          padding: '0 40px',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          paddingTop: '64px',
          paddingBottom: '64px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '512px',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <TryMeHeader />
            
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}>
              <PhotoUpload onFileSelect={handleFileSelect} />
              
              <PreferenceForm onPreferencesChange={handlePreferencesChange} />
              
              <GenerateButton 
                onClick={handleGenerateOutfit}
                disabled={!selectedFile || isLoading}
              />

              {error && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px 16px',
                  backgroundColor: '#fef2f2',
                  borderRadius: '8px',
                  border: '1px solid #fecaca',
                  textAlign: 'center'
                }}>
                  <p style={{
                    color: '#dc2626',
                    fontSize: '14px',
                    margin: 0
                  }}>
                    {error}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      
      <MockLoader isVisible={isLoading} />
    </div>
  );
}

export default TryMe;