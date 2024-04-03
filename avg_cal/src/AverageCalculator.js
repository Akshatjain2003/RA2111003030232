// src/AverageCalculator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const windowSize = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://20.244.56.144/test/even');
      const newNumbers = response.data;
      setNumbers(newNumbers);
      updateWindow(newNumbers);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateWindow = (newNumbers) => {
    const newWindow = [...windowCurrState, ...newNumbers].slice(-windowSize);
    const prevWindow = windowCurrState.slice(-windowSize);
    setWindowPrevState(prevWindow);
    setWindowCurrState(newWindow);
  };

  const calculateAverage = () => {
    const sum = windowCurrState.reduce((acc, curr) => acc + curr, 0);
    return sum / windowCurrState.length;
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Numbers</button>
      <div>
        <p>Window Prev State: {JSON.stringify(windowPrevState)}</p>
        <p>Window Curr State: {JSON.stringify(windowCurrState)}</p>
        <p>Numbers: {JSON.stringify(numbers)}</p>
        <p>Average: {windowCurrState.length >= windowSize ? calculateAverage().toFixed(2) : 'Not enough numbers'}</p>
      </div>
    </div>
  );
};

export default AverageCalculator;
