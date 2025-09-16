import ActionButton from '../../components/ActionButton';

function ActionButtons({ onSaveToFavorites, onShowAnother }) {
  const handleSaveToFavorites = () => {
    if (onSaveToFavorites) {
      onSaveToFavorites();
    } else {
      alert('Outfit saved to favorites!');
    }
  };

  const handleShowAnother = () => {
    if (onShowAnother) {
      onShowAnother();
    } else {
      alert('Generating another recommendation...');
    }
  };

  return (
    <div style={{
      marginTop: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: '100%',
        '@media (min-width: 640px)': {
          flexDirection: 'row',
          justifyContent: 'center'
        }
      }}>
        <ActionButton
          variant="primary"
          icon="favorite"
          onClick={handleSaveToFavorites}
          style={{
            width: '100%',
            maxWidth: '300px'
          }}
        >
          Save to Favorites
        </ActionButton>
        
        <ActionButton
          variant="secondary"
          icon="refresh"
          onClick={handleShowAnother}
          style={{
            width: '100%',
            maxWidth: '300px'
          }}
        >
          Show Me Another
        </ActionButton>
      </div>
    </div>
  );
}

export default ActionButtons;