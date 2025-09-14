function Header() {
  return (
    <header style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: '16px 40px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <a style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}>
          <svg 
            style={{ height: '32px', width: '32px' }}
            fill="#a413ec" 
            viewBox="0 0 48 48" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              clipRule="evenodd" 
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" 
              fillRule="evenodd"
            />
          </svg>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000000',
            margin: 0
          }}>
            Veyu
          </h2>
        </a>
        
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#a413ec',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}>
            Home
          </a>
          <a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#111827',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#a413ec'}
          onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            Features
          </a>
          <a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#111827',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#a413ec'}
          onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            About
          </a>
          <a style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#111827',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#a413ec'}
          onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            Contact
          </a>
        </nav>
        
        <button style={{
          display: 'flex',
          minWidth: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          height: '40px',
          padding: '0 20px',
          backgroundColor: '#a413ec',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0.025em',
          border: 'none',
          cursor: 'pointer',
          transition: 'opacity 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;