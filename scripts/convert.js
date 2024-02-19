const appId = 'd0d9e4b413d8edec14f86df6';
const baseURL = 'https://v6.exchangerate-api.com/v6';

let baseCurrency = "USD";
let exchangeRatesData = null;

// Function to handle the response
function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function populateSelect(data) {
  const select = document.getElementById('baseSelect');
  const conversionRates = data.conversion_rates;
  for (const currency in conversionRates) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      select.appendChild(option);
  }
  const selectCurr = document.getElementById('convesionSelect');
  const conversion = data.conversion_rates;
  for (const currency in conversion) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      selectCurr.appendChild(option);
  }
}

// Function to fetch exchange rates data
function fetchExchangeRates() {
  const url = `${baseURL}/${appId}/latest/${baseCurrency}`;
  
  fetch(url)
    .then(handleResponse)
    .then(data => {
      // Process the data here
      exchangeRatesData = data
      //console.log(data);
      populateSelect(data);
      convert();
    })
    .catch(error => {
      console.error('Error fetching exchange rates:', error);
    });
}
// Call the function to fetch exchange rates
fetchExchangeRates();

function convert(){
    results = document.getElementById('converted');
    //console.log(exchangeRatesData.conversion_rates);
    const conversionSelect = document.getElementById('convesionSelect');
    results.innerText = exchangeRatesData.conversion_rates[conversionSelect.value];
    console.log(conversionSelect.value);
    document.getElementById('convertThis').addEventListener('change', function() {
        let theConverted = exchangeRatesData.conversion_rates[conversionSelect.value]*this.value;
        if (!this.value){
            results.innerText = exchangeRatesData.conversion_rates[conversionSelect.value]; 
        }else{
            results.innerText = theConverted;
        }
        console.log(theConverted)
    });
}

//Add event listener to select element
document.getElementById('baseSelect').addEventListener('change', function() {
    // Update baseCurrency with the value of the selected option
    baseCurrency = this.value;
    console.log(baseCurrency);
    
    // Re-fetch exchange rates data with the updated baseCurrency
    fetchExchangeRates();
  });

//Add event listener to pair select element
document.getElementById('convesionSelect').addEventListener('change', function() {
    const currency_rate = this.value;
    results = document.getElementById('converted');
    amountInput = document.getElementById('convertThis');
    amountInput.value = '';
    
    results.innerText = exchangeRatesData.conversion_rates[currency_rate];

//    console.log(exchangeRatesData.conversion_rates[currency_rate]);
});




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
  let randomRates = getFourRandom(data.conversion_rates, 4);
  const baseCurr = data.base_code;
  console.log(baseCurr);
  //console.log(conversionRates)
  for (const rate in randomRates){
    const card = `<section class="card"><p><span>${baseCurr}</span>/<span>${rate}</span></p><p>${randomRates[rate]}</p></section>`;
    //console.log(conversionRates[rate]);
    group.innerHTML += card;
  }
}

// Function to fetch exchange rates data
function fetchCurrencies() {
    const url = `${baseURL}/${appId}/latest/USD`;
    
    fetch(url)
      .then(handleResponse)
      .then(data => {
        // Process the data here
        //console.log(data);
        displayOnHome(data);

      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }
  // Call the function to fetch exchange rates
  fetchCurrencies();