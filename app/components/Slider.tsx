'use client'

import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  setValue: any;
}

const Slider: React.FC<SliderProps> = ({ min, max, setValue}) => {
  const [sliderValue, setSliderValue] = useState(min);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    setValue(value);
  };

  return (
    <div className="flex items-center">
      <input
        type="number"
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleSliderChange}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Slider;
