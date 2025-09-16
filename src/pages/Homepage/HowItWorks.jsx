function HowItWorks() {
  return (
    <section style={{
      padding: '64px 16px',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '768px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            margin: '0 0 16px 0',
            color: '#111827'
          }}>
            How Veyu Works
          </h2>
          <p style={{
            marginTop: '16px',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#6b7280'
          }}>
            Finding your perfect style is just a few taps away. Here's how Veyu transforms your fashion journey.
          </p>
        </div>
        <div style={{
          marginTop: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px 32px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '96px',
              width: '96px',
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              marginBottom: '24px'
            }}>
              <span style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#a413ec'
              }}>
                1
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#111827',
              margin: '0 0 8px 0'
            }}>
              Create Your Profile
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Tell us about your body type, skin tone, and style preferences. The more we know, the better your recommendations.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '96px',
              width: '96px',
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              marginBottom: '24px'
            }}>
              <span style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#a413ec'
              }}>
                2
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#111827',
              margin: '0 0 8px 0'
            }}>
              Get Personalised Matches
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Our AI stylist analyzes your profile to curate a collection of outfits tailored just for you, for any occasion.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '96px',
              width: '96px',
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              marginBottom: '24px'
            }}>
              <span style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#a413ec'
              }}>
                3
              </span>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#111827',
              margin: '0 0 8px 0'
            }}>
              Shop Your Look
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Love an outfit? Instantly shop the look from our partner brands or find similar items to recreate it yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;