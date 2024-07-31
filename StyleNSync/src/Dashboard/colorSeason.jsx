import React, { useState } from 'react';

const ColorSeason = () => {
  const [selectedSeason, setSelectedSeason] = useState('');
  const [showPalette, setShowPalette] = useState(false);

  const seasons = [
    { name: 'Spring', description: 'Warm and bright', color: '#FFB7B2' },
    { name: 'Summer', description: 'Cool and soft', color: '#E0BBE4' },
    { name: 'Autumn', description: 'Warm and deep', color: '#FFCB69' },
    { name: 'Winter', description: 'Cool and bright', color: '#7CB9E8' }
  ];

  const colorPalettes = {
    Spring: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA'],
    Summer: ['#E0BBE4', '#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3', '#97C1A9'],
    Autumn: ['#D4E2D4', '#FFCB69', '#E8985E', '#D57149', '#7A5C61', '#89B0AE'],
    Winter: ['#9A348E', '#0077BE', '#7CB9E8', '#00A86B', '#C41E3A', '#FFFFFF']
  };

  const seasonDescriptions = {
    Spring: "You shine in warm, clear colors that reflect the fresh bloom of spring. Your palette is cheerful and energetic, perfect for making a vibrant impression.",
    Summer: "Your colors are cool, delicate, and sophisticated. Soft, muted tones complement your natural grace and create a serene, elegant look.",
    Autumn: "Rich, warm colors of the harvest season suit you best. Your palette is earthy and intense, conveying depth and warmth in your appearance.",
    Winter: "Bold, cool, and clear colors make you stand out. Your dramatic palette allows for striking contrasts that command attention and exude confidence."
  };

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
    setShowPalette(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Discover Your Color Season</h2>
      
      <div className="mb-6">
        <p className="text-red-500 mb-4">
          Choosing the right colors can enhance your natural beauty and boost your confidence. 
          Select your color season to see which palette complements you best.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {seasons.map(season => (
            <button
              key={season.name}
              onClick={() => handleSeasonSelect(season.name)}
              className={`p-4 rounded-lg shadow-md transition-all duration-300 ${
                selectedSeason === season.name 
                  ? 'text-white transform scale-105' 
                  : 'bg-white hover:text-white'
              }`}
              style={{
                backgroundColor: selectedSeason === season.name ? season.color : 'white',
                ':hover': {
                  backgroundColor: season.color
                }
              }}
            >
              <h3 className="font-semibold text-lg">{season.name}</h3>
              <p className="text-sm">{season.description}</p>
            </button>
          ))}
        </div>
      </div>

      {showPalette && (
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-4">{selectedSeason} Color Palette</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            {colorPalettes[selectedSeason].map(color => (
              <div 
                key={color} 
                className="w-16 h-16 rounded-full shadow-md" 
                style={{ backgroundColor: color }}
                title={color}
              ></div>
            ))}
          </div>
          <p className="text-gray-700 mt-4">{seasonDescriptions[selectedSeason]}</p>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Style Tips:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Use these colors in your clothing, accessories, and makeup.</li>
              <li>Mix and match within your palette for harmonious outfits.</li>
              <li>Experiment with different shades to find your personal favorites.</li>
              <li>Consider these colors when shopping for new items to build a cohesive wardrobe.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSeason;