function ReasonsList({ reasons = [] }) {
  const defaultReasons = [
    {
      icon: 'palette',
      text: 'The neutral tones complement your warm skin undertone, creating a harmonious and radiant look.'
    },
    {
      icon: 'accessibility_new',
      text: 'The A-line cut of the dress flatters your pear body shape, highlighting your waist while gracefully draping over your hips.'
    },
    {
      icon: 'celebration',
      text: 'This outfit is perfect for a casual weekend brunch, matching the relaxed yet stylish occasion you specified.'
    }
  ];

  const displayReasons = reasons.length > 0 ? reasons : defaultReasons;

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
        {displayReasons.map((reason, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <span style={{
              fontSize: '20px',
              color: '#a413ec',
              fontFamily: 'Material Symbols Outlined',
              marginTop: '2px',
              flexShrink: 0
            }}>
              {reason.icon}
            </span>
            <span style={{
              color: '#4b5563',
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
              {reason.text}
            </span>
          </li>
        ))}
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

export default ReasonsList;