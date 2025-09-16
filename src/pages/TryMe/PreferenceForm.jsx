import { useState } from 'react';
import SelectableButton from '../../components/SelectableButton';

function PreferenceForm({ onPreferencesChange }) {
  const [selections, setSelections] = useState({
    bodyType: [],
    skinTone: [],
    skinUndertone: [],
    occasion: []
  });

  const preferenceConfig = {
    bodyType: {
      label: "Body type",
      options: ["Hourglass", "Pear", "Apple", "Rectangle", "Inverted Triangle", "Triangle", "Oval", "Trapezoid"],
      defaultSelected: ["Rectangle"]
    },
    skinTone: {
      label: "Skin tone",
      options: [
        ["Light", "Fair", "Medium", "Tan", "Dark"],
        ["Warm", "Cool", "Neutral"]
      ],
      defaultSelected: [["Medium"], ["Neutral"]]
    },
    occasion: {
      label: "Occasion", 
      options: ["Casual", "Formal", "Party", "Work", "Wedding", "Sport"],
      defaultSelected: ["Casual", "Party"]
    }
  };

  // Initialize default selections
  useState(() => {
    const defaultSelections = {
      bodyType: preferenceConfig.bodyType.defaultSelected,
      skinTone: preferenceConfig.skinTone.defaultSelected[0],
      skinUndertone: preferenceConfig.skinTone.defaultSelected[1],
      occasion: preferenceConfig.occasion.defaultSelected
    };
    setSelections(defaultSelections);
    if (onPreferencesChange) {
      onPreferencesChange(defaultSelections);
    }
  }, []);

  const handleToggle = (category, subcategory, option) => {
    setSelections(prev => {
      const newSelections = { ...prev };
      const key = subcategory || category;
      
      if (newSelections[key].includes(option)) {
        newSelections[key] = newSelections[key].filter(item => item !== option);
      } else {
        newSelections[key] = [...newSelections[key], option];
      }
      
      if (onPreferencesChange) {
        onPreferencesChange(newSelections);
      }
      
      return newSelections;
    });
  };

  const renderSection = (category, config) => {
    if (category === 'skinTone') {
      return (
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
            {config.label}
          </label>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {config.options[0].map(option => (
              <SelectableButton
                key={option}
                isSelected={selections.skinTone.includes(option)}
                onToggle={() => handleToggle('skinTone', null, option)}
              >
                {option}
              </SelectableButton>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {config.options[1].map(option => (
              <SelectableButton
                key={option}
                isSelected={selections.skinUndertone.includes(option)}
                onToggle={() => handleToggle('skinUndertone', null, option)}
              >
                {option}
              </SelectableButton>
            ))}
          </div>
        </div>
      );
    }

    return (
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
          {config.label}
        </label>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {config.options.map(option => (
            <SelectableButton
              key={option}
              isSelected={selections[category].includes(option)}
              onToggle={() => handleToggle(category, null, option)}
            >
              {option}
            </SelectableButton>
          ))}
        </div>
      </div>
    );
  };

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
      
      {Object.entries(preferenceConfig).map(([category, config]) => (
        <div key={category}>
          {renderSection(category, config)}
        </div>
      ))}
    </div>
  );
}

export default PreferenceForm;