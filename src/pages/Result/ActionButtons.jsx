import ActionButton from '../../components/ActionButton';
import { useNavigate } from 'react-router-dom';
import { MdFavorite, MdRestartAlt } from 'react-icons/md';

function ActionButtons({ onSaveToFavorites, onShowAnother }) {
  const navigate = useNavigate();
  const handleSaveToFavorites = () => {
    if (onSaveToFavorites) {
      onSaveToFavorites();
    } else {
      alert('Outfit saved to favorites!');
    }
  };

  const handleTryAgain = () => {
    navigate('/tryme');
  };

  return (
    <>
      <style>{`
        @media (min-width: 640px) {
          .desktop-row {
            flex-direction: row !important;
            justify-content: center !important;
          }
        }
      `}</style>
      <div style={{
      marginTop: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%'
        }}
        className="desktop-row"
      >
        <ActionButton
          variant="primary"
          IconComponent={MdFavorite}
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
          IconComponent={MdRestartAlt}
          onClick={handleTryAgain}
          style={{
            width: '100%',
            maxWidth: '300px'
          }}
        >
          Try Again
        </ActionButton>
      </div>
      </div>
    </>
  );
}

export default ActionButtons;