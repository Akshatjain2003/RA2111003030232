// src/AverageCalculator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const windowSize = 10;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3NDc4LCJpYXQiOjE3MTIxNTcxNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJmZmQ5NTczLTYwOWItNDY3Yi04ZjQ1LTcyYzE3MzdiNmMyNSIsInN1YiI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJiZmZkOTU3My02MDliLTQ2N2ItOGY0NS03MmMxNzM3YjZjMjUiLCJjbGllbnRTZWNyZXQiOiJHTktOcG5xRGxWamJMbXdYIiwib3duZXJOYW1lIjoiQWtzaGF0Iiwib3duZXJFbWFpbCI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDAzMDMwMjMyIn0.Iy8sZWI6wimlLTd66W_ehfhMUU77kra39F0XVUnd8nw";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const instance=axios.create({
        baseURL:'www.google.com/',
        headers:{
            'Content-Type':'application/json',
                        'Acess-Control-Allow-Origin':'*',
                        'Authorization':`Bearer ${token}`,
                        'Accept': "application/json"
            }
        })
    
      const response = await instance.get('http://20.244.56.144/test/even')
      const newNumbers = response.data.numbers;
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
