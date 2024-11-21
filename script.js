const hamburger = document.getElementById('burger'); // ID-Änderung hier
const navItem = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navItem.classList.toggle('active'); // sollte .active verwenden
});