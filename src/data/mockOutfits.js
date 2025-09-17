// Mock outfit data mapped by occasion and desired effect combinations
export const mockOutfitData = {
  "Movie Outing": {
    "Effortless Chic": {
      id: 1,
      styleName: "Effortless Chic",
      occasion: "Movie Outing",
      desiredEffect: "Effortless Chic",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ddtPT92mYj-gaeeHkJeZ2R9Kb7pOOyeuINJ3TuJbd9v37VXTUjzdej-CnvvpXDKsxgZchEbfXXMpi1x9FQBLkbjaaQsRn51kfZJYOarjPABVn5X-haf7ff5osgWgsnrI2Wyd2YH_dBfRA365zLszUTW9t9vZReXGyng3MOBVBABU3sls7z7mWYb43FhglFVUmRHiZcsJlNWT-RJ0DoAszyYpP3MNaMmLltHIX6hQzaCeECSUhpAgofCPZmoosphXqQtyIjXfJnoP",
      reasons: [
        {
          icon: 'palette',
          text: 'The neutral tones create a timeless look perfect for a relaxed movie date.'
        },
        {
          icon: 'accessibility_new', 
          text: 'The comfortable fit allows you to sit comfortably while looking effortlessly stylish.'
        },
        {
          icon: 'celebration',
          text: 'This outfit strikes the perfect balance between casual and put-together for your movie outing.'
        }
      ],
      appreciationMessage: "Perfect for a cozy movie night - you'll look effortlessly stunning!"
    },
    "Casual Confidence": {
      id: 2,
      styleName: "Casual Confidence", 
      occasion: "Movie Outing",
      desiredEffect: "Casual Confidence",
      image: "https://example.com/casual-confidence-movie.jpg",
      reasons: [
        {
          icon: 'psychology',
          text: 'This confident casual look will make you feel at ease and self-assured.'
        },
        {
          icon: 'style',
          text: 'The layered approach gives you versatility for changing theater temperatures.'
        },
        {
          icon: 'local_movies',
          text: 'Comfortable yet stylish - ideal for enjoying your movie experience.'
        }
      ],
      appreciationMessage: "You'll feel confidently comfortable throughout your movie experience!"
    }
  },
  "Wedding": {
    "Classic Elegance": {
      id: 3,
      styleName: "Classic Elegance",
      occasion: "Wedding", 
      desiredEffect: "Classic Elegance",
      image: "https://example.com/classic-elegant-wedding.jpg",
      reasons: [
        {
          icon: 'diamond',
          text: 'Timeless silhouette and refined details honor the special occasion.'
        },
        {
          icon: 'palette',
          text: 'Sophisticated color choice complements wedding photos beautifully.'
        },
        {
          icon: 'celebration',
          text: 'Elegant enough for the ceremony, comfortable for dancing at the reception.'
        }
      ],
      appreciationMessage: "You'll be elegantly dressed to celebrate this special day!"
    }
  },
  "Business": {
    "Powerful Professional": {
      id: 4,
      styleName: "Powerful Professional",
      occasion: "Business",
      desiredEffect: "Powerful Professional", 
      image: "https://example.com/powerful-professional.jpg",
      reasons: [
        {
          icon: 'business_center',
          text: 'Sharp tailoring and confident silhouette command respect in any boardroom.'
        },
        {
          icon: 'psychology',
          text: 'This look enhances your natural authority and professional presence.'
        },
        {
          icon: 'trending_up',
          text: 'Modern details keep your style current while maintaining professionalism.'
        }
      ],
      appreciationMessage: "You'll radiate confidence and professionalism in every meeting!"
    }
  },
  "Casual Day Out": {
    "Casual Confidence": {
      id: 5,
      styleName: "Casual Confidence",
      occasion: "Casual Day Out",
      desiredEffect: "Casual Confidence", 
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ddtPT92mYj-gaeeHkJeZ2R9Kb7pOOyeuINJ3TuJbd9v37VXTUjzdej-CnvvpXDKsxgZchEbfXXMpi1x9FQBLkbjaaQsRn51kfZJYOarjPABVn5X-haf7ff5osgWgsnrI2Wyd2YH_dBfRA365zLszUTW9t9vZReXGyng3MOBVBABU3sls7z7mWYb43FhglFVUmRHiZcsJlNWT-RJ0DoAszyYpP3MNaMmLltHIX6hQzaCeECSUhpAgofCPZmoosphXqQtyIjXfJnoP",
      reasons: [
        {
          icon: 'self_improvement',
          text: 'This relaxed yet refined look boosts your confidence for any casual activity.'
        },
        {
          icon: 'directions_walk',
          text: 'Comfortable and practical for walking, shopping, or meeting friends.'
        },
        {
          icon: 'sunny',
          text: 'Perfect for a day out - stylish enough for photos, comfy for all-day wear.'
        }
      ],
      appreciationMessage: "You'll feel perfectly put-together for whatever the day brings!"
    }
  },
  "Clubbing": {
    "Bold Statement": {
      id: 6,
      styleName: "Bold Statement",
      occasion: "Clubbing",
      desiredEffect: "Bold Statement",
      image: "https://example.com/bold-statement-club.jpg", 
      reasons: [
        {
          icon: 'nightlife',
          text: 'Eye-catching design ensures you stand out on the dance floor.'
        },
        {
          icon: 'bolt',
          text: 'Bold colors and statement details make an unforgettable impression.'
        },
        {
          icon: 'music_note',
          text: 'Designed to move with you while maintaining that show-stopping look.'
        }
      ],
      appreciationMessage: "Get ready to turn heads and own the night!"
    }
  },
  "Date": {
    "Glamorous Diva": {
      id: 7,
      styleName: "Glamorous Diva",
      occasion: "Date",
      desiredEffect: "Glamorous Diva",
      image: "https://example.com/glamorous-diva-date.jpg",
      reasons: [
        {
          icon: 'star',
          text: 'Luxurious details and sophisticated styling create an enchanting presence.'
        },
        {
          icon: 'favorite',
          text: 'Romantic elements enhance your natural beauty and charm.'
        },
        {
          icon: 'restaurant',
          text: 'Perfect for an upscale dinner date or special romantic evening.'
        }
      ],
      appreciationMessage: "You'll look absolutely stunning and feel like the star of the evening!"
    }
  }
};

// Fallback outfits for combinations not specifically mapped
export const fallbackOutfits = [
  {
    id: 999,
    styleName: "Versatile Style",
    occasion: "Any Occasion",
    desiredEffect: "Confident & Comfortable",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ddtPT92mYj-gaeeHkJeZ2R9Kb7pOOyeuINJ3TuJbd9v37VXTUjzdej-CnvvpXDKsxgZchEbfXXMpi1x9FQBLkbjaaQsRn51kfZJYOarjPABVn5X-haf7ff5osgWgsnrI2Wyd2YH_dBfRA365zLszUTW9t9vZReXGyng3MOBVBABU3sls7z7mWYb43FhglFVUmRHiZcsJlNWT-RJ0DoAszyYpP3MNaMmLltHIX6hQzaCeECSUhpAgofCPZmoosphXqQtyIjXfJnoP",
    reasons: [
      {
        icon: 'palette',
        text: 'This versatile style works beautifully with your personal preferences.'
      },
      {
        icon: 'accessibility_new',
        text: 'The flattering silhouette enhances your natural features.'
      },
      {
        icon: 'celebration',
        text: 'A perfect choice for your selected occasion and desired style effect.'
      }
    ],
    appreciationMessage: "This look is perfectly tailored to your unique style preferences!"
  }
];

// Function to get personalized reasons based on user inputs
export const generatePersonalizedReasons = (userInputs, baseReasons) => {
  const personalizedReasons = baseReasons.map(reason => {
    let personalizedText = reason.text;
    
    // Add personalization based on user inputs
    if (userInputs.height && reason.text.includes('silhouette')) {
      personalizedText = reason.text + ` The proportions work especially well with your height.`;
    }
    
    return {
      ...reason,
      text: personalizedText
    };
  });
  
  return personalizedReasons;
};