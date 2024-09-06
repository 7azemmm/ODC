
console.log(window.location);
let data = new URLSearchParams(window.location.search)

let id=data.get('id');

let productDetails = document.getElementById('product-details');
let getdata= async()=>{

    let query =await fetch(`https://dummyjson.com/products/${id}`)
    
    let product = await query.json()
   

    console.log(product);
    
    productDetails.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.thumbnail}" alt="${product.title}" />
    <p>Price: $${product.price}</p>
    <p>${product.description}</p>
    `;
} 




getdata()