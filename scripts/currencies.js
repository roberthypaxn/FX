//currencies.js
import { fetchExchangeRates } from "./utils.mjs";
import { fetchSearchRates } from "./utils.mjs";

let baseCurr = "USD";

function populateSection(data) {
  const group = document.getElementById('currencies');
  group.innerHTML = "";
  const conversionRates = data.conversion_rates;
  const baseCurrency = data.base_code;
  for (const rate in conversionRates){
    const card = `<section class="card"><p><span>${baseCurrency}</span>/<span>${rate}</span></p><p>${conversionRates[rate]}</p></section>`;
    group.innerHTML += card;
  }
  
}

fetchExchangeRates(populateSection);

function populateSelect(data) {
  const select = document.getElementById('currencySelector');
  const conversionRates = data.conversion_rates;
  for (const currency in conversionRates) {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      select.appendChild(option);
  }
}

function handleSearch(currencies, event){
    const value = event.target.value.toUpperCase().trim();
    const group = document.getElementById('currencies');
    let base = document.getElementById('currencySelector');
    base = base.value;

    if (value !=="") {
      currencies = currencies.conversion_rates;
      group.innerHTML = "";
      for(let currency in currencies){
        if(currency.includes(value)){
          //populate group with that
          const card = `<section class="card"><p><span>${base}</span>/<span>${currency}</span></p><p>${currencies[currency]}</p></section>`
          group.innerHTML += card;
        }
      }
    }else {
      group.innerHTML = "";
      fetchExchangeRates(populateSection, base);
    }

}

const searchInput = document.querySelector("[data-search]"); // select the search box

searchInput.addEventListener("input", event =>{
  fetchSearchRates(handleSearch, event, baseCurr);
})

document.getElementById('currencySelector').addEventListener('change', function() {
  // Update baseCurrency with the value of the selected option
  baseCurr = this.value;
  // Re-fetch exchange rates data with the updated baseCurrency
  fetchExchangeRates(populateSelect,baseCurr);
  fetchExchangeRates(populateSection,baseCurr);
});
fetchExchangeRates(populateSelect);