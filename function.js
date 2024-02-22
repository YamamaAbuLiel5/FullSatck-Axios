
const getProduct= async ()=>
{
  const response=await axios.get("https://dummyjson.com/products");
  const data= await response.data;
  const products=data.products;

  console.log(products);
  const result=products.map(function(product)
  {
    return `
    <div>
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price}$</p>
      <button><a href="productDetails.html?id=${product.id}">More details</a></>
    </div>
    `
  }
  ).join('');


  document.querySelector('#product-list').innerHTML =result;

}
 


  
  getProduct();
