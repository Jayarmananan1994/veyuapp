import { useNavigate } from 'react-router-dom';
import { MdFavorite, MdPerson } from 'react-icons/md';

function Header({ currentPage = "Home" }) {
  const navigate = useNavigate();
  const isHomepage = currentPage === "Home";
  const isResultPage = currentPage === "Result";
  
  const headerStyle = isHomepage ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    padding: '16px 40px'
  } : isResultPage ? {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: 'rgba(249, 250, 251, 0.8)',
    backdropFilter: 'blur(8px)',
    padding: '16px 40px'
  } : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid #e2e8f0',
    padding: '16px 40px'
  };

  const getNavLinkStyle = (page) => {
    const isActive = currentPage === page;
    return {
      fontSize: isHomepage ? '14px' : '16px',
      fontWeight: isActive ? 'bold' : '500',
      color: isActive ? (isHomepage ? '#a413ec' : '#1e293b') : (isHomepage ? '#111827' : '#64748b'),
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 0.3s'
    };
  };

  const buttonText = isHomepage ? "Get Started" : "Sign In";
  const buttonStyle = isHomepage ? {
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
  } : {
    display: 'flex',
    minWidth: '84px',
    maxWidth: '480px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    overflow: 'hidden',
    borderRadius: '8px',
    height: '40px',
    padding: '0 16px',
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    letterSpacing: '-0.025em',
    border: 'none',
    transition: 'background-color 0.2s'
  };

  return (
    <header style={headerStyle}>
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: '#1e293b',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/')}
      >
        <svg 
          style={{ width: '24px', height: '24px', color: isHomepage ? '#a413ec' : '#1e293b' }}
          fill="currentColor" 
          viewBox="0 0 48 48" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            clipRule="evenodd" 
            d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" 
            fillRule="evenodd"
          />
        </svg>
        <h1 style={{
          color: isHomepage ? '#000000' : '#1e293b',
          fontSize: isHomepage ? '24px' : '20px',
          fontWeight: 'bold',
          letterSpacing: '-0.025em',
          margin: 0
        }}>
          Veyu
        </h1>
      </div>
      
      {!isHomepage && (
        <nav style={{
          display: 'none',
          '@media (min-width: 768px)': {
            display: 'flex'
          },
          alignItems: 'center',
          gap: '32px',
          color: '#64748b',
          fontWeight: '500'
        }}>
          <a 
            style={getNavLinkStyle("Home")}
            onClick={() => navigate('/')}
            onMouseEnter={(e) => {
              if (currentPage !== "Home") {
                e.target.style.color = '#1e293b';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== "Home") {
                e.target.style.color = '#64748b';
              }
            }}
          >
            Home
          </a>
          <a 
            style={getNavLinkStyle("About")}
            onMouseEnter={(e) => {
              if (currentPage !== "About") {
                e.target.style.color = '#1e293b';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== "About") {
                e.target.style.color = '#64748b';
              }
            }}
          >
            About
          </a>
          <a 
            style={getNavLinkStyle("How it works")}
            onMouseEnter={(e) => {
              if (currentPage !== "How it works") {
                e.target.style.color = '#1e293b';
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== "How it works") {
                e.target.style.color = '#64748b';
              }
            }}
          >
            How it works
          </a>
          <a 
            style={getNavLinkStyle("Try On")}
            onClick={() => navigate('/tryme')}
          >
            Try On
          </a>
        </nav>
      )}

      {isHomepage && (
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <a style={getNavLinkStyle("Home")}>
            Home
          </a>
          <a 
            style={getNavLinkStyle("Features")}
            onMouseEnter={(e) => e.target.style.color = '#a413ec'}
            onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            Features
          </a>
          <a 
            style={getNavLinkStyle("About")}
            onMouseEnter={(e) => e.target.style.color = '#a413ec'}
            onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            About
          </a>
          <a 
            style={getNavLinkStyle("Contact")}
            onMouseEnter={(e) => e.target.style.color = '#a413ec'}
            onMouseLeave={(e) => e.target.style.color = '#111827'}
          >
            Contact
          </a>
        </nav>
      )}
      
      {isResultPage ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <a 
            href="#"
            style={{
              borderRadius: '50%',
              padding: '8px',
              color: '#4b5563',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <MdFavorite style={{
              fontSize: '20px'
            }} />
          </a>
          <a 
            href="#"
            style={{
              borderRadius: '50%',
              padding: '8px',
              color: '#4b5563',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e7eb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <MdPerson style={{
              fontSize: '20px'
            }} />
          </a>
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBape1PZsJVY3Q0vSHQoT6n9M6m6DSvZJEu_Z84WnjIJ9v1rVQ9og0Yi9ONlNz4X-bPpkStchRVfXo6AVc6HcpFP8lRdBsuoZCChFef0eSq0qtEYuRt1YCkI9IEteSVCcsxpvQpI5j1Sczr8qhvSRdAXoKfJ9pt2cLCDqJAp-NZQkl18DNCPIJPBuLYUfSe8mec4hW9cQTLzHaMgfuQybpRBUJ6187zfIW0rlUUpf2_jz6o0ebq2P63JgDJyUfycspI6H1Tw18MElJJ")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: '2px solid rgba(209, 213, 219, 0.5)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
      ) : (
        <button 
          style={buttonStyle}
          onClick={() => {
            if (isHomepage) {
              navigate('/tryme');
            }
          }}
          onMouseEnter={(e) => {
            if (isHomepage) {
              e.target.style.opacity = '0.9';
            } else {
              e.target.style.backgroundColor = '#e2e8f0';
            }
          }}
          onMouseLeave={(e) => {
            if (isHomepage) {
              e.target.style.opacity = '1';
            } else {
              e.target.style.backgroundColor = '#f1f5f9';
            }
          }}
        >
          {!isHomepage && (
            <MdPerson style={{
              fontSize: '16px'
            }} />
          )}
          <span style={{ 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {buttonText}
          </span>
        </button>
      )}
    </header>
  );
}

export default Header;