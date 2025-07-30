
//* Menu toggle functionality

function menuHandler() {

  document.querySelector('#open-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.add('nav-open');
  });

  document.querySelector('#close-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
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

menuHandler(); // Initialize the menu handler
clockHandler(); // Initialize the clock handler

