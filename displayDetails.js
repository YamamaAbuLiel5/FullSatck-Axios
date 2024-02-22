
const urlParams=new URLSearchParams(window.location.search);
const id= urlParams.get('id');
 const getDetails=async()=>
 {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const product=await response.data;
    
    const result=
  
     `
    <div>
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price}$</p>
      <p>Brand: ${product.brand}</p> 
      <p>Category: ${product.category}</p> 
      <p>Rating:${product.rating}/5 </p>
      <p>Stock:${product.stock} in stock</p>
      <img src= "${product.thumbnail}" alt="${product.titel}"/><br/>
      
     

    </div>
    `
  
  document.querySelector(".details").innerHTML=result;
 }

 getDetails()