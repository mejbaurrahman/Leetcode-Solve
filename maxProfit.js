var maxProfit = function(prices) {
    let sortedPrice=[]
    for(let j=0; j<prices.length; j++){
        sortedPrice.push(prices[j])
    }
    sortedPrice.sort((a,b)=>a-b)
    let indexBuy;
    for(let i=0; i<prices.length; i++){
        if(prices[i]==sortedPrice[0]){
            indexBuy= i 
            break
        }
    }
    let max = 0;
    for(let i= indexBuy+1; i<prices.length; i++){
        if(prices[i]-sortedPrice[0] > max){
            max = prices[i] - sortedPrice[0]
        }
    }
    
    return max
};

const result = maxProfit([7,6,4,3,1])
console.log(result);