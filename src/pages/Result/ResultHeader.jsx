function ResultHeader() {
  return (
    <div style={{
      marginBottom: '40px',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: 'clamp(2.25rem, 5vw, 3rem)',
        fontWeight: '800',
        letterSpacing: '-0.025em',
        color: '#111827',
        margin: 0
      }}>
        Your Outfit Recommendation
      </h2>
      <p style={{
        marginTop: '16px',
        fontSize: '1.125rem',
        color: '#4b5563',
        margin: '16px 0 0 0'
      }}>
        Based on your preferences, here is a style we think you'll love.
      </p>
    </div>
  );
}

export default ResultHeader;