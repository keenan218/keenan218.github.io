
//* Menu toggle functionality

function menuHandler() {

  document.querySelector('#open-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.add('nav-open');
  });

  document.querySelector('#close-nav-menu').addEventListener('click', function () {
    document.querySelector('header nav .wrapper').classList.remove('nav-open');
  });

}

//* Page load

menuHandler(); // Initialize the menu handler
