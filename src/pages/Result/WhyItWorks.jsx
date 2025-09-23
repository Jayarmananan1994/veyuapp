import { MdPalette, MdContentCut, MdCheckroom, MdDiamond } from 'react-icons/md';

function WhyItWorks({ whyItWorks = [] }) {
  const defaultWhyItWorks = [
    'Makeup: The neutral tones complement your warm skin undertone, creating a harmonious and radiant look.',
    'Hairstyle: The sleek styling frames your face beautifully and complements the overall sophisticated look.',
    'Outfit: The silhouette flatters your body shape while maintaining comfort and style.',
    'Accessories: Minimalist jewelry adds elegance without overwhelming the outfit, perfect for your desired aesthetic.'
  ];

  // Function to get appropriate icon component based on text content
  const getIconForText = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.startsWith('makeup') || lowerText.includes('foundation') || lowerText.includes('lipstick') || lowerText.includes('eyeshadow')) {
      return MdPalette;
    } else if (lowerText.startsWith('hairstyle') || lowerText.startsWith('hair') || lowerText.includes('hair styling')) {
      return MdContentCut;
    } else if (lowerText.startsWith('accessories') || lowerText.includes('jewelry') || lowerText.includes('necklace') || lowerText.includes('earrings') || lowerText.includes('watch')) {
      return MdDiamond;
    } else if (lowerText.startsWith('outfit') || lowerText.includes('clothing') || lowerText.includes('garment') || lowerText.includes('dress') || lowerText.includes('top') || lowerText.includes('bottom') || lowerText.includes('silhouette') || lowerText.includes('fit') || lowerText.includes('style')) {
      return MdCheckroom;
    }
    // Default fallback for outfit-related suggestions
    return MdCheckroom;
  };

  const displayWhyItWorks = whyItWorks.length > 0 ? 
    whyItWorks.map((item) => ({
      IconComponent: typeof item === 'object' && item.icon ? item.icon : getIconForText(typeof item === 'string' ? item : item.text || ''),
      text: typeof item === 'string' ? item : (item.text || item)
    })) : 
    defaultWhyItWorks.map((item) => ({
      IconComponent: getIconForText(item),
      text: item
    }));

  return (
    <div style={{
      marginTop: '24px',
      borderTop: '1px solid #e5e7eb',
      paddingTop: '24px'
    }}>
      <h4 style={{
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: '#111827',
        margin: '0 0 16px 0'
      }}>
        Why it works for you
      </h4>
      <ul style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {displayWhyItWorks.map((item, index) => {
          const IconComponent = item.IconComponent;
          return (
            <li key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <IconComponent 
                style={{
                  fontSize: '20px',
                  color: '#a413ec',
                  marginTop: '2px',
                  flexShrink: 0
                }}
              />
              <span style={{
                color: '#4b5563',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
      <p style={{
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '1.125rem',
        fontWeight: '500',
        color: '#374151',
        fontStyle: 'italic',
        margin: '24px 0 0 0'
      }}>
        We hope you love this look as much as we do!
      </p>
    </div>
  );
}

export default WhyItWorks;