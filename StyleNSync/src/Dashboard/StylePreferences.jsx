import React, { useState } from 'react';

const StylePreferences = () => {
  const [bodyType, setBodyType] = useState('');
  const [clothingPreferences, setClothingPreferences] = useState([]);
  const [favoriteRetailers, setFavoriteRetailers] = useState([]);

  const bodyTypes = [
    'Hourglass', 'Pear', 'Apple', 'Rectangle', 'Inverted Triangle'
  ];

  const clothingOptions = {
    'Hourglass': ['Fitted dresses', 'Wrap tops', 'High-waisted bottoms', 'Belt at the waist'],
    'Pear': ['A-line skirts', 'Wide-leg pants', 'Boat neck tops', 'Statement necklaces'],
    'Apple': ['Empire waist dresses', 'V-neck tops', 'Straight-leg pants', 'Long cardigans'],
    'Rectangle': ['Peplum tops', 'Ruffled dresses', 'Layered looks', 'Belted jackets'],
    'Inverted Triangle': ['Wide-leg pants', 'A-line skirts', 'Scoop neck tops', 'Detailed bottoms']
  };

  const retailerOptions = [
    'Zara', 'H&M', 'Uniqlo', 'Nordstrom', 'ASOS', 'Macy\'s', 'Urban Outfitters', 'Anthropologie'
  ];

  const handleBodyTypeChange = (type) => {
    setBodyType(type);
    setClothingPreferences([]); // Reset clothing preferences when body type changes
  };

  const handleClothingPreferenceChange = (preference) => {
    setClothingPreferences(prev => 
      prev.includes(preference)
        ? prev.filter(item => item !== preference)
        : [...prev, preference]
    );
  };

  const handleRetailerChange = (retailer) => {
    setFavoriteRetailers(prev => 
      prev.includes(retailer)
        ? prev.filter(item => item !== retailer)
        : [...prev, retailer]
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Style Preferences</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Body Type</h3>
        <div className="flex flex-wrap gap-2">
          {bodyTypes.map(type => (
            <button
              key={type}
              onClick={() => handleBodyTypeChange(type)}
              className={`px-4 py-2 rounded ${bodyType === type ? 'bg-red-200 text-white' : 'bg-gray-200'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {bodyType && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Clothing Preferences for {bodyType} Type</h3>
          <div className="flex flex-wrap gap-2">
            {clothingOptions[bodyType].map(preference => (
              <button
                key={preference}
                onClick={() => handleClothingPreferenceChange(preference)}
                className={`px-4 py-2 rounded ${clothingPreferences.includes(preference) ? 'bg-red-200 text-white' : 'bg-gray-200'}`}
              >
                {preference}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Favorite Retailers</h3>
        <div className="flex flex-wrap gap-2">
          {retailerOptions.map(retailer => (
            <button
              key={retailer}
              onClick={() => handleRetailerChange(retailer)}
              className={`px-4 py-2 rounded ${favoriteRetailers.includes(retailer) ? 'bg-red-200 text-white' : 'bg-gray-200'}`}
            >
              {retailer}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default StylePreferences;