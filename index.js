const products =[
    {name:'iphone 14',price:70000},
    {name:'samsung galaxy 14',price:60000},
    {name:'dell laptop',price:50000},
    {name:'lenevo yoga laptop 14',price:55000},
    {name:'asus afsus',price:3000}
  
]

function searchProducts(products,searchText)
{
    const result=[];
    for(const product of products)
    {
        if(product.name.includes(searchText))
        {
            result.push(product);
        }
    }
    return result;
}

console.log(searchProducts(products,"laptop"));