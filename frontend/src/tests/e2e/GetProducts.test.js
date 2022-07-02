test('GET products', async () => {
  const axios = require('axios');
  const response = await axios('http://localhost:3000/');

  expect(response.data).toBeTruthy();
  expect(response.data.length).toBeTruthy();
})
