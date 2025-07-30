
//* Menu toggle functionality

function menuHandler() {

  document.querySelector('#open-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.add('nav-open');
  });

  document.querySelector('#close-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
  });

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

//* Page load

clockHandler(); // Initialize the clock handler
menuHandler(); // Initialize the menu handler
greetingHandler(); // Initialize the greeting handler

