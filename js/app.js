//  class
const currencyAPI = new CurrencyAPI();
const ui = new UI();

//  listeners
eventListeners();
function eventListeners() {
  //  access to swap button for converting currency
  document.querySelector("#swap").addEventListener("click", convertCurrency);
}

//  function
//  converting currency
function convertCurrency() {
  //  access to first select tag
  const currencyOne = document.querySelector("#currency-one");
  //  access to second select tag
  const currencyTwo = document.querySelector("#currency-two");
  //  access to first input tag
  const amountOneE = document.querySelector("#amount-one");
  //  access to second input  tag
  const amountTwoE = document.querySelector("#amount-two");

  currencyAPI.BuildURLForAPI(currencyOne.value).then((info) => {
    //  getting rate(result) depended on currency one and currency two
    const rate = info.result.conversion_rates[currencyTwo.value];
    //  show  rate in rate div
    ui.showResultINRate(rate, currencyOne.value, currencyTwo.value);

    //  calculating value for second input tag
    const amountTwoAmount = amountOneE.value * rate;
    //  show  amount to second input tag
    ui.showResultInSecondInput(amountTwoE, amountTwoAmount);
  });
}
