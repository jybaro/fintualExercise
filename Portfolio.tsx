type IPortfolio = {
  stocks: Array<TStock>;
  Profit: (startDate: Date, endDate: Date) => number;
};
type TStock = {
  symbol: string;
  name: string;
  prices: Array<TStockPrice>;
  Price: (date: Date) => number;
};
type TStockPrice = {
  date: Date;
  price: number;
};

class Portfolio implements IPortfolio {
  stocks: Array<TStock>;

  constructor(stocks: Array<TStock>) {
    this.stocks = stocks;
  }
  Profit(startDate: Date, endDate: Date) {
    let result = 0;
    for (let i = 0; i < this.stocks.length; i++) {
      result += this.stocks[i].Price(endDate) - this.stocks[i].Price(startDate);
    }
    return result;
  }
}
