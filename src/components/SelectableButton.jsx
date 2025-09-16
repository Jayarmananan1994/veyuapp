import { useState } from 'react';

function SelectableButton({ children, isSelected, onToggle, ...props }) {
  const handleClick = () => {
    if (onToggle) {
      onToggle();
    }
  };

  const baseStyles = {
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    padding: '8px 16px',
    color: '#374151',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#7c3aed' : 'transparent',
    color: isSelected ? 'white' : '#374151',
    borderColor: isSelected ? '#7c3aed' : '#cbd5e1',
  };

  const hoverStyles = {
    backgroundColor: isSelected ? '#8b5cf6' : '#f1f5f9'
  };

  return (
    <button
      style={baseStyles}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, baseStyles);
      }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default SelectableButton;