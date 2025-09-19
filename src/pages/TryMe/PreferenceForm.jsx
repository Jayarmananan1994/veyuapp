import { useState, useEffect } from 'react';
import SelectableButton from '../../components/SelectableButton';

function PreferenceForm({ onPreferencesChange }) {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    occasion: '',
    desiredEffect: [],
    stylingPreferences: [],
    additionalNotes: ''
  });

  // Occasion to Desired Effect mapping
  const occasionEffectMap = {
    "Movie Outing": ["Effortless Chic", "Casual Confidence"],
    "Wedding": ["Classic Elegance", "Romantic Glam", "Bohemian Muse"],
    "Business": ["Classic Elegance", "Powerful Professional", "Modern Sophistication"],
    "Casual Day Out": ["Casual Confidence", "Eco-Conscious Appeal", "Gender-Neutral Expression", "Athleisure Sophistication", "Preppy Academia"],
    "Clubbing": ["Bold Statement", "Sexy Flex", "Edgy Avant-Garde"],
    "Gym": ["Athleisure Sophistication"],
    "Date": ["Glamorous Diva", "Sexy Flex"],
    "Airport": ["Casual Confidence"]
  };

  const occasionOptions = Object.keys(occasionEffectMap);
  const stylingOptions = ["No Makeup", "No Hair Change", "Minimal Accessories"];
  const defaultOccasion = "Casual Day Out";

  // Initialize default selections
  useEffect(() => {
    const defaultFormData = {
      height: '',
      weight: '',
      occasion: defaultOccasion,
      desiredEffect: [],
      stylingPreferences: [],
      additionalNotes: ''
    };
    setFormData(defaultFormData);
    if (onPreferencesChange) {
      onPreferencesChange(defaultFormData);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const newFormData = { ...prev, [field]: value };
      if (onPreferencesChange) {
        onPreferencesChange(newFormData);
      }
      return newFormData;
    });
  };

  const handleOccasionSelect = (selectedOccasion) => {
    setFormData(prev => {
      // Reset desired effect when occasion changes
      const newFormData = { 
        ...prev, 
        occasion: selectedOccasion,
        desiredEffect: [] // Clear previous desired effects
      };
      if (onPreferencesChange) {
        onPreferencesChange(newFormData);
      }
      return newFormData;
    });
  };

  const handleDesiredEffectToggle = (effect) => {
    setFormData(prev => {
      const newDesiredEffects = prev.desiredEffect.includes(effect) 
        ? prev.desiredEffect.filter(item => item !== effect)
        : [...prev.desiredEffect, effect];
      
      const newFormData = { ...prev, desiredEffect: newDesiredEffects };
      if (onPreferencesChange) {
        onPreferencesChange(newFormData);
      }
      return newFormData;
    });
  };

  const handleStylingPreferenceToggle = (preference) => {
    setFormData(prev => {
      const newStylingPreferences = prev.stylingPreferences.includes(preference) 
        ? prev.stylingPreferences.filter(item => item !== preference)
        : [...prev.stylingPreferences, preference];
      
      const newFormData = { ...prev, stylingPreferences: newStylingPreferences };
      if (onPreferencesChange) {
        onPreferencesChange(newFormData);
      }
      return newFormData;
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '16px',
    color: '#374151',
    backgroundColor: 'white',
    transition: 'border-color 0.2s ease',
    outline: 'none'
  };

  const inputFocusStyle = {
    borderColor: '#7c3aed',
    boxShadow: '0 0 0 3px rgba(124, 58, 237, 0.1)'
  };

  // Get available desired effects for selected occasion
  const availableDesiredEffects = formData.occasion ? occasionEffectMap[formData.occasion] || [] : [];

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      <h3 style={{
        color: '#1e293b',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        letterSpacing: '-0.025em',
        textAlign: 'left',
        margin: 0
      }}>
        Tell us about you
      </h3>
      
      {/* Height Input */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <label style={{
          color: '#475569',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Height <span style={{color: '#9ca3af', fontSize: '14px'}}>(optional)</span>
        </label>
        <input
          type="text"
          placeholder="e.g., 5'6&quot; or 168 cm"
          value={formData.height}
          onChange={(e) => handleInputChange('height', e.target.value)}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
      </div>

      {/* Weight Input */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <label style={{
          color: '#475569',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Weight <span style={{color: '#9ca3af', fontSize: '14px'}}>(optional)</span>
        </label>
        <input
          type="text"
          placeholder="e.g., 140 lbs or 65 kg"
          value={formData.weight}
          onChange={(e) => handleInputChange('weight', e.target.value)}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
      </div>

      {/* Occasion Selection (Single Select) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <label style={{
          color: '#475569',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Occasion
        </label>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {occasionOptions.map(option => (
            <SelectableButton
              key={option}
              isSelected={formData.occasion === option}
              onToggle={() => handleOccasionSelect(option)}
            >
              {option}
            </SelectableButton>
          ))}
        </div>
      </div>

      {/* Desired Effect Selection (Multi Select, based on occasion) */}
      {formData.occasion && availableDesiredEffects.length > 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <label style={{
            color: '#475569',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            Desired Effect
          </label>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {availableDesiredEffects.map(effect => (
              <SelectableButton
                key={effect}
                isSelected={formData.desiredEffect.includes(effect)}
                onToggle={() => handleDesiredEffectToggle(effect)}
              >
                {effect}
              </SelectableButton>
            ))}
          </div>
        </div>
      )}

      {/* Styling Preferences Selection (Multi Select) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <label style={{
          color: '#475569',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Styling Preferences
        </label>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {stylingOptions.map(option => (
            <SelectableButton
              key={option}
              isSelected={formData.stylingPreferences.includes(option)}
              onToggle={() => handleStylingPreferenceToggle(option)}
            >
              {option}
            </SelectableButton>
          ))}
        </div>
      </div>

      {/* Additional Notes Text Field */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <label style={{
          color: '#475569',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Additional Notes <span style={{color: '#9ca3af', fontSize: '14px'}}>(optional)</span>
        </label>
        <textarea
          placeholder="Any specific requirements or preferences you'd like us to consider..."
          value={formData.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
          rows={3}
          style={{
            ...inputStyle,
            resize: 'vertical',
            minHeight: '80px',
            fontFamily: 'inherit'
          }}
          onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
          onBlur={(e) => Object.assign(e.target.style, {
            ...inputStyle,
            resize: 'vertical',
            minHeight: '80px',
            fontFamily: 'inherit'
          })}
        />
      </div>
    </div>
  );
}

export default PreferenceForm;