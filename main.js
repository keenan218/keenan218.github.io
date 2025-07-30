
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

//* Page load

clockHandler(); // Initialize the clock handler
menuHandler(); // Initialize the menu handler
galleryHandler(); // Initialize the gallery handler
greetingHandler(); // Initialize the greeting handler

