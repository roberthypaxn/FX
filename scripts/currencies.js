import { fetchExchangeRates } from "./utils.mjs";
import { fetchSearchRates } from "./utils.mjs";

let baseCurr = "USD";

function populateSection(data) {
  const group = document.getElementById('currencies');
  const conversionRates = data.conversion_rates;
  //console.log(conversionRates)
  for (const rate in conversionRates){
    //const card = `<section class="card"><span>${rate}</span><span>${conversionRates[rate]}</span></section>`;
    const card = `<section class="card"><p><span>${baseCurr}</span>/<span>${rate}</span></p><p>${conversionRates[rate]}</p></section>`;
    //console.log(conversionRates[rate]);
    group.innerHTML += card;
  }
  
}

fetchExchangeRates(populateSection, baseCurr);

function handleSearch(currencies, event){
    const value = event.target.value.toUpperCase().trim();
    const group = document.getElementById('currencies');

    if (value !=="") {
      currencies = currencies.conversion_rates;
      group.innerHTML = "";
      for(let currency in currencies){
        if(!currency.includes(value)){
          group.innerHTML = '<p>Nothing to see here!</p>'
        }else{
          //populate group with that
          console.log(currency);
          const card = `<section class="card"><p><span>${baseCurr}</span>/<span>${currency}</span></p><p>${currencies[currency]}</p></section>`
          group.innerHTML += card;
        }
      }
    }else {
      group.innerHTML = "";
      fetchExchangeRates(populateSection, baseCurr);
    }

}

const searchInput = document.querySelector("[data-search]"); // select the search box

searchInput.addEventListener("input", event =>{
  fetchSearchRates(handleSearch, baseCurr, event);
})
