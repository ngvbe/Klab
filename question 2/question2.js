const items = [ 
    {name: 'Bike', price:100}, 
    {name: 'TV', price:200}, 
    {name: 'Album', price:10}, 
    {name: 'Book', price:5}, 
    {name: 'Phone', price:500}, 
    {name: 'Computer', price:1000}, 
    ];
  
  const cheapPrice = items.filter(item => item.price < 10);
  const expensivePrice = items.filter(item => item.price > 500);
  
  let priceSum = 0;
  
  for (let index = 0; index < items.length; index++) {
    sum += items[index]['price'];
  }
  
  const sumWithoutCheapPrice = sum - cheapPrice[0]['price'];
  
    console.log(cheapPrice);
    console.log(expensivePrice);
    console.log(sum);
    console.log(sumWithoutCheapPrice);''