import { fetchExchangeRates } from "./utils.mjs";

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
  