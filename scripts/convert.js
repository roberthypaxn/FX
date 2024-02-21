import { fetchExchangeRates } from "./utils.mjs";

let baseCurrency = "USD";

function populateSelect(data) {
  const select = document.getElementById('baseSelect');
  const conversionRates = data.conversion_rates;
  for (const currency in conversionRates) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      select.appendChild(option);
  }
  const selectCurr = document.getElementById('conversionSelect');
  const conversion = data.conversion_rates;
  for (const currency in conversion) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      selectCurr.appendChild(option);
  }
}

fetchExchangeRates(populateSelect, baseCurrency);

function convert(exchangeRatesData){
    const results = document.getElementById('converted');
    //console.log(exchangeRatesData.conversion_rates);
    const conversionSelect = document.getElementById('conversionSelect');
    results.innerText = exchangeRatesData.conversion_rates[conversionSelect.value];
    //console.log(conversionSelect.value);
    document.getElementById('convertThis').addEventListener('input', function() {
        let theConverted = exchangeRatesData.conversion_rates[conversionSelect.value]*this.value;
        if (!this.value){
            results.innerText = exchangeRatesData.conversion_rates[conversionSelect.value]; 
        }else{
            results.innerText = theConverted;
        }
        console.log(theConverted)
    });
}
fetchExchangeRates(convert, baseCurrency);
//Add event listener to select element
document.getElementById('baseSelect').addEventListener('change', function() {
    // Update baseCurrency with the value of the selected option
    baseCurrency = this.value;
    //console.log(baseCurrency);
    
    // Re-fetch exchange rates data with the updated baseCurrency
    fetchExchangeRates(populateSelect,baseCurrency);
    fetchExchangeRates(convert, baseCurrency);
  });

function conversionSelect(exchangeRatesData){
  //Add event listener to pair select element
  document.getElementById('conversionSelect').addEventListener('change', function() {
    const currency_rate = this.value;
    const results = document.getElementById('converted');
    const amountInput = document.getElementById('convertThis');
    amountInput.value = '';
    results.innerText = exchangeRatesData.conversion_rates[currency_rate];

//    console.log(exchangeRatesData.conversion_rates[currency_rate]);
});
}
fetchExchangeRates(conversionSelect, baseCurrency);

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
fetchExchangeRates(displayOnHome,"USD");