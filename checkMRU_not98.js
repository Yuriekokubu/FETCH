// Assuming this code is running in a Node.js environment
const fs = require('fs');

// Read the contents of the data.json file
const jsonData = fs.readFileSync('data.json', 'utf8');

// Parse the JSON data
const originalData = JSON.parse(jsonData);

// Your filtering logic
const filteredRows = originalData.filter(row => {
  const lastFourCharacters = row.MRU.slice(-4);
  return !lastFourCharacters.match(/^98\d{2}$/);
});

// Output the filtered data
console.log(filteredRows);
