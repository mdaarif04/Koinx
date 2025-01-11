export const fetchBitcoinData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
  );
  const data = await response.json();
  return data.bitcoin;
};

export const fetchTrendingCoins = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const data = await response.json();
  return data.coins.map((coin) => ({
    name: coin.item.name,
    image: coin.item.small,
    priceChange: coin.item.price_btc,
  }));
};
