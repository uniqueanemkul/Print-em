function scrollToTop() {
    window.scrollTo(0, 0);
}

const imageContainer = document.getElementById('image-container');
const image = document.getElementById('image');

function toggleImage() {
  if (image.src.includes('openpink.png')) {
    image.src = 'img/homepage/closepink.png';
  } else {
    image.src = 'img/homepage/openpink.png';
  }
}

// Toggle image on click
imageContainer.addEventListener('click', toggleImage);

// Automatically toggle image every 5 seconds
setInterval(toggleImage, 5000);

// alert.js
function validateForm()
{
  var firstname = document.forms["accountForm"]["firstname"].value;
  var lastname = document.forms["accountForm"]["lastname"].value;
  var email = document.forms["accountForm"]["email"].value;
  var password = document.forms["accountForm"]["psw"].value;

  alert("Your account has been created!!!")
}