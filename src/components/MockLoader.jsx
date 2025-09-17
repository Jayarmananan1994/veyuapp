import { useState, useEffect } from 'react';

function MockLoader({ isVisible = true }) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [dots, setDots] = useState(0);

  const loadingMessages = [
    "Analyzing your photo",
    "Understanding your style preferences", 
    "Finding perfect outfit matches",
    "Curating your personalized recommendations",
    "Almost ready"
  ];

  useEffect(() => {
    if (!isVisible) return;

    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, 600);

    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev + 1) % 4);
    }, 300);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, [isVisible, loadingMessages.length]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '40px 32px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Animated Spinner */}
        <div style={{
          width: '60px',
          height: '60px',
          margin: '0 auto 24px auto',
          position: 'relative'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '4px solid #f3f4f6',
            borderTop: '4px solid #a413ec',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>

        {/* Loading Message */}
        <h3 style={{
          color: '#1e293b',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          margin: '0 0 8px 0',
          minHeight: '30px'
        }}>
          {loadingMessages[currentMessage]}{'.'.repeat(dots)}
        </h3>
        
        <p style={{
          color: '#64748b',
          fontSize: '14px',
          margin: 0
        }}>
          This may take a few seconds
        </p>

        {/* Progress Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          {loadingMessages.map((_, index) => (
            <div
              key={index}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: index <= currentMessage ? '#a413ec' : '#e5e7eb',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default MockLoader;