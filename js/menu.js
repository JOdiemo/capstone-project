// eslint-disable-next-line no-unused-vars

function showMenu() {
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu-list1').classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function hideMenu() {
  document.querySelector('.navigation.active').classList.remove('active');
  document.querySelector('.menu-list1.active').classList.remove('active');
}

// -----------Validate Form--------