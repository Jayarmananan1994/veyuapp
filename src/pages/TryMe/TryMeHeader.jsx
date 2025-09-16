function TryMeHeader() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{
        color: '#1e293b',
        fontSize: '2.25rem',
        fontWeight: 'bold',
        letterSpacing: '-0.025em',
        marginBottom: '8px'
      }}>
        Virtual Try-On
      </h2>
      <p style={{
        color: '#64748b',
        fontSize: '1.125rem',
        margin: 0
      }}>
        Upload a picture to see how the outfits look on you.
      </p>
    </div>
  );
}

export default TryMeHeader;