import WhyItWorks from './WhyItWorks';

function OutfitCard({ 
  outfitData = {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ddtPT92mYj-gaeeHkJeZ2R9Kb7pOOyeuINJ3TuJbd9v37VXTUjzdej-CnvvpXDKsxgZchEbfXXMpi1x9FQBLkbjaaQsRn51kfZJYOarjPABVn5X-haf7ff5osgWgsnrI2Wyd2YH_dBfRA365zLszUTW9t9vZReXGyng3MOBVBABU3sls7z7mWYb43FhglFVUmRHiZcsJlNWT-RJ0DoAszyYpP3MNaMmLltHIX6hQzaCeECSUhpAgofCPZmoosphXqQtyIjXfJnoP",
    styleName: "Effortless Chic",
    occasion: "Casual",
    whyItWorks: []
  }
}) {
  
  const cardStyles = {
    overflow: 'hidden',
    borderRadius: '16px',
    backgroundColor: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease',
    cursor: 'default'
  };

  const hoverStyles = {
    transform: 'translateY(-8px)'
  };

  return (
    <div 
      style={cardStyles}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, { ...cardStyles, ...hoverStyles });
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, cardStyles);
      }}
    >
      {outfitData.image ? (
        <img 
          src={outfitData.image}
          alt={`${outfitData.styleName} Outfit`}
          style={{
            height: 'auto',
            width: '60%',
            maxWidth: '400px',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto'
          }}
        />
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 32px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            fontSize: '48px',
            color: '#9ca3af',
            marginBottom: '16px',
            fontFamily: 'Material Symbols Outlined'
          }}>
            image_not_supported
          </div>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#374151',
            margin: '0 0 8px 0',
            textAlign: 'center'
          }}>
            Sorry, image could not be generated
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
            textAlign: 'center'
          }}>
            We were unable to create a visual for this outfit recommendation
          </p>
        </div>
      )}
      
      <div style={{
        padding: '32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#111827',
            margin: 0
          }}>
            {outfitData.styleName}
          </h3>
          <span style={{
            borderRadius: '9999px',
            backgroundColor: '#f3e8ff',
            padding: '4px 12px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#a413ec'
          }}>
            {outfitData.occasion}
          </span>
        </div>
        
        <WhyItWorks whyItWorks={outfitData.whyItWorks} />
      </div>
    </div>
  );
}

export default OutfitCard;