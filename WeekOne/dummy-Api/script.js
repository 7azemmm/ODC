let cont =document.querySelector('.container')

var getProducts = async () => {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    let products = data.products
    console.log(products);
    
    // Loop through the products array
    products.map((product) => {
       cont.innerHTML+=`
       <div class="card">
       
       <img src="${product.thumbnail}" alt="${product.title}" >

       <p> ${product.title} , <p> ${product.price}</p> </p>

       <a href="./single.html?id=${product.id}">View Details</a>


       
       </div>
       
       
       `
    });
     


  };

  getProducts();
  console.log('hazem');
   