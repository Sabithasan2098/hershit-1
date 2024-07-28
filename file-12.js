const userCart = [
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"laptop",price:120000},
    {productNaeme:"tablet",price:110000},
    {productNaeme:"tv",price:50000},
    {productNaeme:"table",price:4000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
    {productNaeme:"IPhone",price:150000},
]

const sum = userCart.reduce((accumulator,productPrice) =>{
    return accumulator + productPrice.price
},0)

console.log(sum);