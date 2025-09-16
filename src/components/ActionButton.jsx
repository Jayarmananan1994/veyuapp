function ActionButton({ 
  children, 
  variant = "primary", 
  icon, 
  onClick, 
  disabled = false,
  className = "",
  ...props 
}) {
  const baseStyles = {
    display: 'flex',
    width: '100%',
    maxWidth: '300px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    transition: 'all 0.3s ease',
    opacity: disabled ? 0.6 : 1,
    boxShadow: variant === 'primary' ? '0 10px 15px -3px rgba(124, 58, 237, 0.2)' : 'none'
  };

  const variants = {
    primary: {
      backgroundColor: '#a413ec',
      color: 'white',
      border: 'none'
    },
    secondary: {
      backgroundColor: 'white',
      color: '#374151',
      border: '2px solid #d1d5db'
    }
  };

  const hoverStyles = {
    primary: {
      transform: 'scale(1.05)'
    },
    secondary: {
      transform: 'scale(1.05)',
      backgroundColor: '#f9fafb'
    }
  };

  const buttonStyles = {
    ...baseStyles,
    ...variants[variant]
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      style={buttonStyles}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, { ...buttonStyles, ...hoverStyles[variant] });
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, buttonStyles);
        }
      }}
      {...props}
    >
      {icon && (
        <span style={{
          fontSize: '20px',
          fontFamily: 'Material Symbols Outlined'
        }}>
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

export default ActionButton;