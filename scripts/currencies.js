const appId = 'd0d9e4b413d8edec14f86df6';
const baseURL = 'https://v6.exchangerate-api.com/v6';

let baseCurrency = "USD";

// Function to handle the response
function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function populateSection(data) {
  const group = document.getElementById('currencies');
  const conversionRates = data.conversion_rates;
  //console.log(conversionRates)
  for (const rate in conversionRates){
    const card = `<section class="card"><span>${rate}</span><span>${conversionRates[rate]}</span></section>`;
    //console.log(conversionRates[rate]);
    group.innerHTML += card;
  }
  
}

function getFourRandom(obj, count) {
  let keys = Object.keys(obj);
  let vals = [];
  let noms = [];
  let fourRandom = {}
  while (vals.length < count) {
    let index = Math.floor(Math.random() * keys.length);
    let randomKey = keys[index];
    if (!vals.includes(obj[randomKey])) {
      vals.push(obj[randomKey]);
      noms.push(randomKey);
    }
    for (let i = 0; i < noms.length; i++) {
      fourRandom[noms[i]] = vals[i];
    }
  }
  return fourRandom;
}

function displayOnHome(data){
  const group = document.getElementById('suggested__currencies');
  let randomRates = getFourRandom(data.conversion_rates, 4);//Should be another function that calls this.
  console.log(randomNames);
  //console.log(conversionRates)
  for (const rate in randomRates){
    const card = `<section class="card"><span>${rate}</span><span>${randomRates[rate]}</span></section>`;
    //console.log(conversionRates[rate]);
    group.innerHTML += card;
  }
}

// Function to fetch exchange rates data
function fetchExchangeRates() {
    const url = `${baseURL}/${appId}/latest/${baseCurrency}`;
    
    fetch(url)
      .then(handleResponse)
      .then(data => {
        // Process the data here
        //console.log(data);
        populateSection(data);

      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }
  // Call the function to fetch exchange rates
  fetchExchangeRates();
  