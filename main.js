
//* Global params

const galleryImages = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1"
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2"
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3"
  }
];

const products = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png"
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png"
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png"
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png"
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png"
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png"
  }
];

//* Menu toggle functionality

function menuHandler() {

  document.querySelector('#open-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.add('nav-open');
  });

  document.querySelector('#close-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
  });

}

//? Functions

function abc() {

  function localFunction() {
  
    let customerLETLOC = 'John Pork'; //* let = local.
  
  }
  
  //!! let of the above function is not available outside of this function.
  var customerVAR = 'John Doe'; //* var is available globally. Only to be used when you intentionally want to make a variable globally available.
  let customerLET = 'Jane Doe'; //* let is available locally.
  const customerCONST = 'Jennifer Doe'; //* const is available locally and cannot be changed.

  console.log(customerCONST); //* This will work, as const is available in the local scope.
  console.log(customerVAR); //* This will work, as var is available globally.
  console.log(customerLET); //* This will work, as let is available in the local scope
  console.log(customerLETLOC); //* This will not work, as let is only available in the local scope of the function localFunction.
}

//* Temperature conversion function

function celsiusToFahr(temperature) {
  let fahr = (temperature * 9 / 5) + 32;
  return fahr;
}

//* Greeting section

function greetingHandler() {

  let currentHour = new Date().getHours();
  let greetingText = currentHour < 12 ? "Good morning!" :
    currentHour < 19 ? "Good afternoon!" :
      currentHour < 24 ? "Good evening!" :
        "Welcome!";

  const weatherCondition = "sunny";
  const userLocation = "New York";
  let temperature = 25.397;
  let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1).toString()}°C outside.`;
  let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1).toString()}°F outside.`;

  document.querySelector('#greeting').innerHTML = greetingText
  document.querySelector('p#weather').innerHTML = celsiusText;

  document.querySelector('.weather-group').addEventListener('click', function (e) {

    if (e.target.id == "celsius") {
      document.querySelector('p#weather').innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
      document.querySelector('p#weather').innerHTML = fahrText;
    }

  });

}

//* Local time display

function clockHandler() {

  setInterval(function () {
    let localTime = new Date();

    document.querySelector('span[data-time=hours]').textContent = localTime.getHours().toString().padStart(2, '0');
    document.querySelector('span[data-time=minutes]').textContent = localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector('span[data-time=seconds]').textContent = localTime.getSeconds().toString().padStart(2, '0');
  }, 1000); // This will update the time every second

}

//* Gallery section

function galleryHandler() {

  let mainImage = document.querySelector('#gallery > img');
  let thumbnails = document.querySelector('#gallery .thumbnails');

  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;

  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement('img');
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;

    thumb.addEventListener('click', function (e) {
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      thumbnails.querySelectorAll('img').forEach(function (img) {
        img.dataset.selected = false; // Reset all thumbnails to not selected
      })
      e.target.dataset.selected = true; // Set the clicked thumbnail as selected

    });

    thumbnails.appendChild(thumb);
  });

}

//* Products section

function productsHandler() {
  
  let productSection = document.querySelector('.products-area');
  
  //* Run through the products array and create HTML Element for each product item
  products.forEach(function (product, index) {

    //* Create HTML elements for each product
    let productElm = document.createElement('div');
    productElm.classList.add('product-item');

    //* Create product image
    let productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = 'Image for ' + product.title;

    //* Create product details section
    let productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    //* Create product title, author, and price elements
    let productTitle = document.createElement('h3');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;

    let productAuthor = document.createElement('p');
    productAuthor.classList.add('product-author');
    productAuthor.textContent = product.author;

    let priceTitle = document.createElement('p');
    priceTitle.classList.add('price-title');
    priceTitle.textContent = 'Price';

    let productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = product.price > 0 ? '$' + product.price.toFixed(2) : 'Free'; // Display 'Free' if price is 0

    //* Append product details to the details section
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);

    //* Add all child elements of the product
    productElm.append(productImage);
    productElm.append(productDetails);

    //* Add completed product item to product section
    productSection.append(productElm);

  }); 

}


//* Page load

clockHandler(); // Initialize the handler
menuHandler(); 
galleryHandler(); 
greetingHandler(); 
productsHandler(); 

