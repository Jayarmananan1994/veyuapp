import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutfit } from '../../context/OutfitContext.jsx';
import { outfitAPI } from '../../services/outfitAPI';
import Header from '../../components/Header';
import ResultHeader from './ResultHeader';
import OutfitCard from './OutfitCard';
import ActionButtons from './ActionButtons';
import RecommendationDetails from './RecommendationDetails';
import MockLoader from '../../components/MockLoader';

function Result() {
  const navigate = useNavigate();
  const { outfitData, isLoading, error } = useOutfit();

  // Redirect to TryMe if no outfit data available
  useEffect(() => {
    if (!outfitData && !isLoading) {
      console.log('No outfit data found, redirecting to TryMe page');
      navigate('/tryme');
    }
  }, [outfitData, isLoading, navigate]);

  const handleSaveToFavorites = () => {
    if (outfitData?.data) {
      console.log('Saving outfit to favorites:', outfitData.data);
      alert('Outfit saved to favorites!');
    }
  };

  const handleShowAnother = async () => {
    try {
      console.log('Generating another recommendation...');
      
      if (!outfitData?.data?.id || !outfitData?.userInputs) {
        alert('Unable to generate alternative. Please try again from the beginning.');
        return;
      }

      // Get alternative outfit using the API
      const alternativeResult = await outfitAPI.generateOutfit(
        outfitData.data.id,
        outfitData.userInputs
      );

      // Update the context with the new outfit data
      // For now, we'll just show an alert since we don't have a method to update outfit data
      console.log('Alternative outfit generated:', alternativeResult);
      alert('New recommendation generated! (In a full implementation, this would update the display)');
      
    } catch (err) {
      console.error('Failed to generate alternative outfit:', err);
      alert('Failed to generate another recommendation. Please try again.');
    }
  };

  // Show loading state
  if (isLoading) {
    return <MockLoader isVisible={true} />;
  }

  // Show error state
  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '32px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ color: '#dc2626', fontSize: '1.5rem', marginBottom: '16px' }}>
            Oops! Something went wrong
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '24px' }}>
            {error}
          </p>
          <button
            onClick={() => navigate('/tryme')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#a413ec',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Don't render if no outfit data (will redirect via useEffect)
  if (!outfitData?.data) {
    return null;
  }

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'
    }}>
      <Header currentPage="Result" />
      
      <main style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        padding: '48px 16px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1024px',
          padding: '0 16px'
        }}>
          <ResultHeader />
          
          <OutfitCard outfitData={outfitData.data} />

          <RecommendationDetails recommendations={outfitData.data.recommendations} />

          <ActionButtons
            onSaveToFavorites={handleSaveToFavorites}
            onShowAnother={handleShowAnother}
          />
        </div>
      </main>
    </div>
  );
}

export default Result;