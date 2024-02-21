//utils.mjs
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

export function fetchSearchRates(func, e, base) {
  const url = `${baseURL}/${appId}/latest/${base}`;
  
  fetch(url)
    .then(handleResponse)
    .then(data => {
      func(data, e);
    })
    .catch(error => {
      console.error('Error fetching exchange rates:', error);
    });
}
export async function loadHeaderFooter() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const hero = document.querySelector(".hero");
  const headerTemplate = await loadTemplate("../includes/header.html");
  const footerTemplate =  await loadTemplate("../includes/footer.html");
  const heroTemplate =  await loadTemplate("../includes/hero.html");
  renderWithTemplate(header, headerTemplate);
  renderWithTemplate(footer, footerTemplate);
  renderWithTemplate(hero, heroTemplate);

}
async function renderWithTemplate(element, data, position = "afterBegin") {
//Render the template using just javascript with no libraries
  element.innerHTML = data; 
}
async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}
