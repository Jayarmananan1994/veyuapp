function GenerateButton({ onClick, disabled = false }) {
  const baseStyles = {
    display: 'flex',
    width: '100%',
    minWidth: '84px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '8px',
    height: '48px',
    padding: '0 20px',
    backgroundColor: disabled ? '#94a3b8' : '#7c3aed',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    letterSpacing: '-0.025em',
    boxShadow: disabled ? 'none' : '0 10px 15px -3px rgba(124, 58, 237, 0.2)',
    border: 'none',
    transition: 'all 0.2s ease',
    opacity: disabled ? 0.6 : 1
  };

  const hoverStyles = {
    backgroundColor: disabled ? '#94a3b8' : '#8b5cf6'
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      style={baseStyles}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, { ...baseStyles, ...hoverStyles });
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, baseStyles);
        }
      }}
    >
      <span style={{ 
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>
        Generate Outfit
      </span>
    </button>
  );
}

export default GenerateButton;