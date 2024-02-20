const appId = 'd0d9e4b413d8edec14f86df6';
const baseURL = 'https://v6.exchangerate-api.com/v6';

// Function to handle the response
function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function fetchExchangeRates(func, base) {
    const url = `${baseURL}/${appId}/latest/${base}`;
    
    fetch(url)
      .then(handleResponse)
      .then(data => {
        func(data);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
}