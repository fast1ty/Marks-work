const express = require('express');
const app = express();
const fs = require('fs');
const csv = require('csv-parser');
 
const carParts = [];
 
fs.createReadStream('LE.csv')
  .pipe(csv({ separator: '\t' }))
  .on('data', (row) => {
    carParts.push({
      serialNumber: row['00002356517'],
      partName: row['Valuveljed '],
      price: parseFloat(row['90,833'].replace(',', '.'))
    });
  })
  .on('end', () => {
    console.log('CSV файл успешно обработан');
    console.log(carParts);
  });
 
const port = 3000;
 
app.get('/spare-parts', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  let filteredResults = carParts.slice(startIndex, endIndex);
 
  if (req.query.serialNumber) {
    filteredResults = filteredResults.filter(part => part.serialNumber.includes(req.query.serialNumber));
  }
 
  if (req.query.partName) {
    filteredResults = filteredResults.filter(part => part.partName.toLowerCase().includes(req.query.partName.toLowerCase()));
  }
 
  if (req.query.sortBy && req.query.sortOrder) {
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
    filteredResults = filteredResults.sort((a, b) => {
      if (a[req.query.sortBy] < b[req.query.sortBy]) return -sortOrder;
      if (a[req.query.sortBy] > b[req.query.sortBy]) return sortOrder;
      return 0;
    });
  }
 
  res.json({
    currentPage: page,
    pageSize: pageSize,
    totalItems: carParts.length,
    totalPages: Math.ceil(carParts.length / pageSize),
    data: filteredResults
  });
});
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});