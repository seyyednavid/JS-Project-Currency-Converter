class CurrencyAPI {
  constructor() {
    this.apiKey = "baecf5e926bcb986a1ca1e5d";
  }
  //   create URL and send  it to api
  async BuildURLForAPI(currencyValueOne) {
    //  base url in https://app.exchangerate-api.com/
    let URL = "https://v6.exchangerate-api.com/v6/";
    //  add api key
    URL += this.apiKey;
    //  add latest for getting the latest news
    URL += "/latest/";
    //  final part of url by selecting desired currency
    URL += currencyValueOne;

    //  fetch url
    const response = await fetch(URL);
    const result = await response.json();
    return {
      result,
    };
  }
}
