// index.js
const express = require('express');
const axios = require('axios');
const https = require('https');

const app = express();

const agent = new https.Agent({
    ca: cert
  });
  

// Define the route
app.get('/number/e', async (req, res) => {
  try {
    // Extract the type from the request parameters
    const { type } = req.params;
    
    // Make a request to the external API
    const response = await axios.get(`https://20.244.56.144/test/even`, {
        httpsAgent: agent,
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3NDc4LCJpYXQiOjE3MTIxNTcxNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJmZmQ5NTczLTYwOWItNDY3Yi04ZjQ1LTcyYzE3MzdiNmMyNSIsInN1YiI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJiZmZkOTU3My02MDliLTQ2N2ItOGY0NS03MmMxNzM3YjZjMjUiLCJjbGllbnRTZWNyZXQiOiJHTktOcG5xRGxWamJMbXdYIiwib3duZXJOYW1lIjoiQWtzaGF0Iiwib3duZXJFbWFpbCI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDAzMDMwMjMyIn0.Iy8sZWI6wimlLTd66W_ehfhMUU77kra39F0XVUnd8nw"
    });
    
    // Return the response from the external API
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return an error response if something went wrong
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/number/p', async (req, res) => {
    try {
      // Extract the type from the request parameters
      const { type } = req.params;
      
      // Make a request to the external API
    const response = await axios.get(`https://20.244.56.144/test/primes`,{
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3NDc4LCJpYXQiOjE3MTIxNTcxNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJmZmQ5NTczLTYwOWItNDY3Yi04ZjQ1LTcyYzE3MzdiNmMyNSIsInN1YiI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJiZmZkOTU3My02MDliLTQ2N2ItOGY0NS03MmMxNzM3YjZjMjUiLCJjbGllbnRTZWNyZXQiOiJHTktOcG5xRGxWamJMbXdYIiwib3duZXJOYW1lIjoiQWtzaGF0Iiwib3duZXJFbWFpbCI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDAzMDMwMjMyIn0.Iy8sZWI6wimlLTd66W_ehfhMUU77kra39F0XVUnd8nw"

    });
      
      // Return the response from the external API
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Return an error response if something went wrong
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/number/f', async (req, res) => {
    try {
      // Extract the type from the request parameters
      const { type } = req.params;
      
      // Make a request to the external API
    const response = await axios.get(`https://20.244.56.144/test/fibo`, {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3NDc4LCJpYXQiOjE3MTIxNTcxNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJmZmQ5NTczLTYwOWItNDY3Yi04ZjQ1LTcyYzE3MzdiNmMyNSIsInN1YiI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJiZmZkOTU3My02MDliLTQ2N2ItOGY0NS03MmMxNzM3YjZjMjUiLCJjbGllbnRTZWNyZXQiOiJHTktOcG5xRGxWamJMbXdYIiwib3duZXJOYW1lIjoiQWtzaGF0Iiwib3duZXJFbWFpbCI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDAzMDMwMjMyIn0.Iy8sZWI6wimlLTd66W_ehfhMUU77kra39F0XVUnd8nw"

    });
      
      // Return the response from the external API
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Return an error response if something went wrong
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/number/r', async (req, res) => {
    try {
      // Extract the type from the request parameters
      const { type } = req.params;
      
      // Make a request to the external API
    const response = await axios.get(`https://20.244.56.144/test/rand`, {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3NDc4LCJpYXQiOjE3MTIxNTcxNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJmZmQ5NTczLTYwOWItNDY3Yi04ZjQ1LTcyYzE3MzdiNmMyNSIsInN1YiI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJiZmZkOTU3My02MDliLTQ2N2ItOGY0NS03MmMxNzM3YjZjMjUiLCJjbGllbnRTZWNyZXQiOiJHTktOcG5xRGxWamJMbXdYIiwib3duZXJOYW1lIjoiQWtzaGF0Iiwib3duZXJFbWFpbCI6ImFqMzY3MUBzcm1pc3QuZWR1LmluIiwicm9sbE5vIjoiUkEyMTExMDAzMDMwMjMyIn0.Iy8sZWI6wimlLTd66W_ehfhMUU77kra39F0XVUnd8nw"

    });
    console.log(response.data);
      
      // Return the response from the external API
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Return an error response if something went wrong
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
