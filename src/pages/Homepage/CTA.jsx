import { useNavigate } from 'react-router-dom';

function CTA() {
  const navigate = useNavigate();
  return (
    <section style={{
      padding: '64px 16px',
      backgroundColor: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          borderRadius: '12px',
          background: 'linear-gradient(to right, #a413ec, #9333ea)',
          padding: '48px 32px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: 'white',
            margin: '0 0 16px 0'
          }}>
            Ready to Elevate Your Style?
          </h2>
          <p style={{
            marginTop: '16px',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '672px',
            margin: '16px auto 32px auto'
          }}>
            Download Veyu today and start your journey to a more confident and stylish you. Your personal stylist is just a tap away.
          </p>
          <div style={{
            marginTop: '32px'
          }}>
            <button style={{
              minWidth: '160px',
              maxWidth: '300px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '8px',
              height: '48px',
              padding: '0 24px',
              backgroundColor: 'white',
              color: '#a413ec',
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
              Try It Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;