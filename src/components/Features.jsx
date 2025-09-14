function Features() {
  return (
    <section style={{
      backgroundColor: 'white',
      padding: '64px 16px'
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
            Styling, Personalized for You
          </h2>
          <p style={{
            marginTop: '16px',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#6b7280'
          }}>
            Veyu's smart technology analyzes your unique attributes to provide recommendations that make you look and feel your best.
          </p>
        </div>
        <div style={{
          marginTop: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(164, 19, 236, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a413ec'
            }}>
              <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,48H179.31L165.66,34.34A8.07,8.07,0,0,0,160.05,32H96a8,8,0,0,0-5.66,2.34L76.69,48H56A16,16,0,0,0,40,64V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V64A16,16,0,0,0,200,48Zm-38.76,4.56L168,59.31V112L138.57,86.56ZM88,59.31l6.76-6.75,22.67,34L88,112ZM120,216H56V64H72v48a15.85,15.85,0,0,0,9.21,14.49A16.1,16.1,0,0,0,88,128a15.89,15.89,0,0,0,10.2-3.73.52.52,0,0,0,.11-.1L120,105.48ZM111,48h34.1L128,73.58ZM200,216H136V105.48l21.65,18.7a.52.52,0,0,0,.11.1A15.89,15.89,0,0,0,168,128a16.1,16.1,0,0,0,6.83-1.54A15.85,15.85,0,0,0,184,112V64h16Z" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              margin: 0,
              color: '#111827'
            }}>
              Body Type Analysis
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Get outfits that flatter your body shape and enhance your natural features.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(164, 19, 236, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a413ec'
            }}>
              <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              margin: 0,
              color: '#111827'
            }}>
              Skin Tone Matching
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Find colors and styles that complement your skin tone and make you shine.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
            padding: '32px',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(164, 19, 236, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a413ec'
            }}>
              <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136A23.76,23.76,0,0,1,171.16,150.45Z" />
              </svg>
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              margin: 0,
              color: '#111827'
            }}>
              Occasion-Based Styles
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Discover the perfect outfits for any event, from casual outings to formal gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;