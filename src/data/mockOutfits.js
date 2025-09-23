// Mock outfit data mapped by occasion and desired effect combinations
export const mockOutfitData = {
  "Movie Outing": {
    "Effortless Chic": {
      id: 1,
      styleName: "Effortless Chic",
      occasion: "Movie Outing",
      desiredEffect: "Effortless Chic",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ddtPT92mYj-gaeeHkJeZ2R9Kb7pOOyeuINJ3TuJbd9v37VXTUjzdej-CnvvpXDKsxgZchEbfXXMpi1x9FQBLkbjaaQsRn51kfZJYOarjPABVn5X-haf7ff5osgWgsnrI2Wyd2YH_dBfRA365zLszUTW9t9vZReXGyng3MOBVBABU3sls7z7mWYb43FhglFVUmRHiZcsJlNWT-RJ0DoAszyYpP3MNaMmLltHIX6hQzaCeECSUhpAgofCPZmoosphXqQtyIjXfJnoP",
      whyItWorks: [
        'Makeup: Natural tones enhance your features while keeping the look effortless and timeless for a movie date.',
        'Hairstyle: A relaxed style that looks polished but won\'t get messed up during the movie.',
        'Outfit: The comfortable fabric and relaxed fit are perfect for sitting through a long movie while still looking stylish.',
        'Accessories: Minimal jewelry adds elegance without being distracting in a dark theater.'
      ],
      appreciationMessage: "Perfect for a cozy movie night - you'll look effortlessly stunning!"
    },
    "Casual Confidence": {
      id: 2,
      styleName: "Casual Confidence", 
      occasion: "Movie Outing",
      desiredEffect: "Casual Confidence",
      image: "https://example.com/casual-confidence-movie.jpg",
      whyItWorks: [
        'Makeup: Bold but comfortable makeup that won\'t smudge during a long movie session.',
        'Hairstyle: A confident style that maintains its shape throughout your outing.',
        'Outfit: The layered pieces give you flexibility to adjust for theater temperature while maintaining your confident look.',
        'Accessories: Statement pieces that add personality while remaining theater-appropriate.'
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
      whyItWorks: [
        'Makeup: Sophisticated tones that photograph beautifully and last through the ceremony.',
        'Hairstyle: An elegant updo that complements the formal occasion and stays perfect all day.',
        'Outfit: Timeless silhouette with refined details that honor the special occasion.',
        'Accessories: Classic pieces that add sophistication without competing with the bride.'
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
      whyItWorks: [
        'Makeup: Professional yet polished look that enhances your natural authority.',
        'Hairstyle: Sleek styling that maintains professionalism while showing attention to detail.',
        'Outfit: Sharp tailoring and confident silhouette command respect in any boardroom.',
        'Accessories: Sophisticated pieces that add polish without being distracting.'
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
      whyItWorks: [
        'Makeup: Fresh, natural look that enhances your features for daytime activities.',
        'Hairstyle: Effortless style that looks great in photos and stays put all day.',
        'Outfit: Comfortable and practical for walking, shopping, or meeting friends.',
        'Accessories: Versatile pieces that add interest without being too formal.'
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
      whyItWorks: [
        'Makeup: Bold, dramatic look with long-lasting formulas perfect for night dancing.',
        'Hairstyle: Statement style that maintains its shape even on the dance floor.',
        'Outfit: Eye-catching design with bold colors that ensures you stand out.',
        'Accessories: Statement pieces that catch the light and add to the dramatic effect.'
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
      whyItWorks: [
        'Makeup: Glamorous look with romantic touches that enhance your natural beauty.',
        'Hairstyle: Sophisticated styling that frames your face beautifully for intimate settings.',
        'Outfit: Luxurious details and elegant silhouette perfect for upscale dinner dates.',
        'Accessories: Romantic pieces that add sparkle and elegance to complete the look.'
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
    whyItWorks: [
      'Makeup: Versatile tones that complement any skin tone and enhance your natural beauty.',
      'Hairstyle: A classic style that works for any occasion and face shape.',
      'Outfit: The versatile silhouette flatters multiple body types and works across different settings.',
      'Accessories: Timeless pieces that add sophistication without overwhelming your look.'
    ],
    appreciationMessage: "This look is perfectly tailored to your unique style preferences!"
  }
];

// Function to get personalized whyItWorks based on user inputs
export const generatePersonalizedWhyItWorks = (userInputs, baseWhyItWorks) => {
  // Provide fallback if baseWhyItWorks is undefined or not an array
  if (!baseWhyItWorks || !Array.isArray(baseWhyItWorks)) {
    return [
      'Makeup: Versatile tones that complement your natural beauty.',
      'Hairstyle: A classic style that works for your face shape.',
      'Outfit: The silhouette flatters your body type and fits the occasion.',
      'Accessories: Carefully chosen pieces that complete the look.'
    ];
  }
  
  const personalizedWhyItWorks = baseWhyItWorks.map(item => {
    let personalizedText = item;
    
    // Add personalization based on user inputs
    if (userInputs.height && item.includes('style')) {
      personalizedText = item + ` Perfect proportions for your height.`;
    }
    
    if (userInputs.stylingPreferences && userInputs.stylingPreferences.includes('No Makeup') && item.includes('Makeup')) {
      personalizedText = item.replace('Makeup:', 'Natural look:');
    }
    
    return personalizedText;
  });
  
  return personalizedWhyItWorks;
};