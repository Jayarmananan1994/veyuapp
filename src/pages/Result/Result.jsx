import { useState } from 'react';
import Header from '../../components/Header';
import ResultHeader from './ResultHeader';
import OutfitCard from './OutfitCard';
import ActionButtons from './ActionButtons';

function Result() {
  const [outfitData, setOutfitData] = useState({
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ddtPT92mYj-gaeeHkJeZ2R9Kb7pOOyeuINJ3TuJbd9v37VXTUjzdej-CnvvpXDKsxgZchEbfXXMpi1x9FQBLkbjaaQsRn51kfZJYOarjPABVn5X-haf7ff5osgWgsnrI2Wyd2YH_dBfRA365zLszUTW9t9vZReXGyng3MOBVBABU3sls7z7mWYb43FhglFVUmRHiZcsJlNWT-RJ0DoAszyYpP3MNaMmLltHIX6hQzaCeECSUhpAgofCPZmoosphXqQtyIjXfJnoP",
    styleName: "Effortless Chic",
    occasion: "Casual",
    reasons: [
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
    ]
  });

  const handleSaveToFavorites = () => {
    console.log('Saving outfit to favorites:', outfitData);
    alert('Outfit saved to favorites!');
  };

  const handleShowAnother = () => {
    console.log('Generating another recommendation...');
    // TODO: Implement logic to generate another recommendation
    alert('Generating another recommendation...');
  };

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
          
          <OutfitCard outfitData={outfitData} />
          
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