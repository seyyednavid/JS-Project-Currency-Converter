class UI {
  constructor() {
    //  access to rate div
    this.rate = document.querySelector("#rate");
  }

  //  display result in rate dive
  showResultINRate(rateAmount, currencyOneValue, currencyTwoValue) {
    //  display result in rate div

    this.rate.innerHTML = `1 ${currencyOneValue} = ${rateAmount} ${currencyTwoValue} `;
  }

  //  display amount in second input
  showResultInSecondInput(amountTwo, amountTwoAmount) {
    amountTwo.value = amountTwoAmount;
  }
}
