import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px',
      backgroundImage: 'linear-gradient(rgba(243, 244, 246, 0.8), rgba(243, 244, 246, 0.6)), url("/home_hero.png")',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '768px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          lineHeight: '1.1',
          letterSpacing: '-0.025em',
          margin: '0 0 16px 0',
          color: '#111827'
        }}>
          Don't be your usual YOU
        </h1>
        <p style={{
          marginTop: '16px',
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          color: '#6b7280',
          maxWidth: '672px',
          margin: '16px auto 32px auto'
        }}>
          Discover bold new styles that match your vibe. Break free from your fashion comfort zone.
        </p>
        <div style={{
          marginTop: '32px',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            minWidth: '140px',
            maxWidth: '300px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '8px',
            height: '48px',
            padding: '0 24px',
            backgroundColor: '#a413ec',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            letterSpacing: '0.025em',
            border: 'none',
            transition: 'opacity 0.3s'
          }}
          onClick={() => navigate('/tryme')}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Explore Styles
          </button>
          <button style={{
            minWidth: '140px',
            maxWidth: '300px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '8px',
            height: '48px',
            padding: '0 24px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            color: '#111827',
            fontSize: '16px',
            fontWeight: 'bold',
            letterSpacing: '0.025em',
            border: 'none',
            backdropFilter: 'blur(4px)',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'}
          >
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;