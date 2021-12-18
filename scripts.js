const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 266681.27

const convertValeus = () => {
   const inputReais = document.getElementById("input-real").value
   const realValueText = document.getElementById("real-value-text")
   const currencyValueText = document.getElementById("currency-value-text")

   realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(inputReais)

   // Maneira de calcular sem formatar o texto - currencyValueText.innerHTML = inputReais / dolar
   if (select.value === 'US$ Dólar Americano') {
      currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      }).format(inputReais / dolar)
   }
   if (select.value === '€ Euro') {
   currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
   }).format(inputReais / euro)
   } 
   
   if (select.value === 'Bitcoin') { 
      currencyValueText.innerHTML = (inputReais / bitcoin).toFixed(6)
   }
}

changeCurrency = () => {
   const currencyName = document.getElementById('currency-name')
   const currencyImg = document.getElementById('currency-img')

   if (select.value === '€ Euro') {
      currencyName.innerHTML = "Euro"
      currencyImg.src = "./assets/euro.png"
   }

   if (select.value === 'US$ Dólar Americano') {
      currencyName.innerHTML = "Dólar Americano"
      currencyImg.src = "./assets/eua.png"
   }

   if (select.value === 'Bitcoin') { 
      currencyName.innerHTML = 'Bitcoin'
      currencyImg.src = "./assets/bitcoin.png"
   }
   convertValeus()
}
button.addEventListener('click', convertValeus)
select.addEventListener('change', changeCurrency)
