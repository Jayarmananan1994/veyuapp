import { useState } from 'react';
import Header from '../../components/Header';
import TryMeHeader from './TryMeHeader';
import PhotoUpload from './PhotoUpload';
import PreferenceForm from './PreferenceForm';
import GenerateButton from './GenerateButton';

function TryMe() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preferences, setPreferences] = useState({});

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    console.log('Selected file:', file.name);
  };

  const handlePreferencesChange = (newPreferences) => {
    setPreferences(newPreferences);
    console.log('Preferences updated:', newPreferences);
  };

  const handleGenerateOutfit = () => {
    console.log('Generating outfit with:', {
      file: selectedFile?.name,
      preferences
    });
    // TODO: Implement outfit generation logic
    alert('Outfit generation feature coming soon!');
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
                disabled={!selectedFile}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TryMe;