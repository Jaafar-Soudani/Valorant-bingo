'use client'

import React, { useState, ChangeEvent } from "react";

type Option = [string, string[]];

const Difficulty = ({setList, optionsList}:any): JSX.Element => {
  /*const [selectedElements, setSelectedElements] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");*/

  
  const [selectedOption, setSelectedOption] = useState<String>(optionsList[0][0]);

  function findValueByIndex(arr:Option[], index:String) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === index) {
        return arr[i][1];
      }
    }
    return null; // Return null if index is not found
  }

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedOption(event.target.value);
    setList(findValueByIndex(optionsList,event.target.value));
  };

  return (
    <div>
      <select value={selectedOption.valueOf()} onChange={handleOptionChange} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {optionsList.map((option: Option, index: number) => (
          <option key={index} value={option[0]} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {option[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Difficulty;
