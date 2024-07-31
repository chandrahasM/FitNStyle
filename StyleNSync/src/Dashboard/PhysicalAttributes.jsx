import React, { useState } from 'react';

const PhysicalAttributes = () => {

  const [hairColor, setHairColor] = useState('#000000');
  const [skinColor, setSkinColor] = useState('');
  const [eyeColor, setEyeColor] = useState('');

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleHairColorChange = (event) => {
    setHairColor(event.target.value);
  };

  const skinColors = [
    { name: 'Very Dark', hex: '#8D5524' },
    { name: 'Dark', hex: '#C68642' },
    { name: 'Medium Dark', hex: '#D2B48C' },
    { name: 'Medium', hex: '#F0D5BE' },
    { name: 'Light', hex: '#FFDBAC' },
    { name: 'Very Light', hex: '#F8D5C2' }
  ];

  const hairColors = [
    { name: 'Black', hex: '#090806' },
    { name: 'Dark Brown', hex: '#3B3024' },
    { name: 'Brown', hex: '#4E3B31' },
    { name: 'Light Brown', hex: '#8C644B' },
    { name: 'Dark Blonde', hex: '#A17A74' },
    { name: 'Blonde', hex: '#E6CEA8' },
    { name: 'Red', hex: '#B55239' }
  ];

  const eyeColors = [
    { name: 'Dark Brown', hex: '#2C1608' },
    { name: 'Light Brown', hex: '#6F4E37' },
    { name: 'Amber', hex: '#E6B517' },
    { name: 'Hazel', hex: '#AE7131' },
    { name: 'Green', hex: '#3D642D' },
    { name: 'Blue', hex: '#3B83BD' },
    { name: 'Gray', hex: '#7A858C' },
    { name: 'Violet', hex: '#6B4C82' }
  ];

  return (
    <div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-1">

          <div>
            <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height (cm)</label>
            <input type="number" id="idHeight" className="bg-red-50 border border-red-400 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="175" required />
          </div>

          <div>
            <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
            <input type="number" id="idWeight" className="bg-red-50 border border-red-400 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-700 dark:border-red-600 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="70" required />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skin Color</label>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {skinColors.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setSkinColor(color.hex)}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${skinColor === color.hex ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hair Color</label>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {hairColors.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setHairColor(color.hex)}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${hairColor === color.hex ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            </div>

            <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Eye Color</label>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {eyeColors.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setEyeColor(color.hex)}
                  className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${eyeColor === color.hex ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            </div>
        </div>
        <button type="submit" className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
};

export default PhysicalAttributes;