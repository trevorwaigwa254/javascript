function updateTime() {
  const now = new Date(); 
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.querySelector('[data-time="hours"]').textContent = hours;
  document.querySelector('[data-time="minutes"]').textContent = minutes;
  document.querySelector('[data-time="seconds"]').textContent = seconds;
  }
// Update time every second
setInterval(updateTime, 1000);

// Initialize on page load
updateTime();
// Time greetings
function timeGreetings(){

  let currentHour = new Date().getHours();
  let greetingText;

  if (currentHour<= 11) {

      greetingText = "Good Morning"

  } else if (currentHour<=17){
      greetingText = "Good Afternoon"

  } else if (currentHour >=18){
      greetingText ="Good Evening"

  } else{
      greetingText = "Welcome"
  }

  document.querySelector("#greeting").innerHTML = greetingText;
}

timeGreetings()
/* change images*/
var myImage = document.querySelector("#galleryImage");

function changeImage1(params) {
 myImage.src = "./assets/gallery/image1.jpg";
 
}
function changeImage2(params) {
 myImage.src = "./assets/gallery/image2.jpg";
 
}
function changeImage3(params) {
 myImage.src = "./assets/gallery/image3.jpg";
 
}
// Array of product objects
const products = [
  { title: 'Product 1', price: 50, image: 'assets/products/img1.png', isFree: false },
  { title: 'Product 2', price: 100, image: 'assets/products/img2.png', isFree: false },
  { title: 'Product 3', price: 200, image: 'assets/products/img3.png', isFree: false },
  { title: 'Product 4', price: 300, image: 'assets/products/img4.png', isFree: false },
  { title: 'Product 5', price: 0, image: 'assets/products/img5.png', isFree: true },
  { title: 'Product 6', price: 0, image: 'assets/products/img6.png', isFree: true },
];

// Function to generate a single card element
function generateCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.background = '#3c3c3c';
  card.style.margin= '4px';
  card.style.display = 'inline-block';

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img');
  img.src = product.image;
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const title = document.createElement('h3');
  title.textContent = product.title;
  infoContainer.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'This is a sample product description.';
  description.classList.add('border-top');
  infoContainer.appendChild(description);

  const price = document.createElement('p');
  price.textContent = '$${product.price}';
  price.classList.add('border-top');
  infoContainer.appendChild(price);

  const addToCart = document.createElement('button');
  addToCart.classList.add('cart');
  addToCart.textContent = 'Add to Cart';
  infoContainer.appendChild(addToCart);

  card.appendChild(infoContainer);
  return card;
}

// Function to display all or filtered products in the card container
function displayItems(filter) {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  let filteredProducts = products;
  if (filter === 'paid') {
    filteredProducts = products.filter(product => product.price > 0);
  } else if (filter === 'free') {
    filteredProducts = products.filter(product => product.price === 0);
  }

  const allQty = filteredProducts.length;
  document.querySelector('.qtyAll').textContent = allQty;
  document.querySelector('.qtyPaid').textContent = filteredProducts.filter(product => product.price > 0).length;
  document.querySelector('.qtyFree').textContent = filteredProducts.filter(product => product.price === 0).length;

  filteredProducts.forEach(product => {
    const card = generateCard(product);
    cardContainer.appendChild(card);
  });
}

// Initialize displaying all products
displayItems('all');

//weather function
var celsiusRadio = document.getElementById("celsius");
    var fahrenheitRadio = document.getElementById("fahr");
    var weatherElement = document.getElementById("weather");
    
    celsiusRadio.addEventListener("change", function() {
        // Display the default message
        weatherElement.textContent = "The degree today is 32.00°C";
    });
    
    fahrenheitRadio.addEventListener("change", function() {
        // Convert temperature to Celsius
        var fahrenheit = 77; // Example Fahrenheit temperature
        var celsius = (fahrenheit - 32) * 5 / 9;
        // Display the temperature in Celsius
        weatherElement.textContent = "Temperature in Celsius: " + celsius.toFixed(2) + "°C";
    });
  
    //hamburger
document.addEventListener("DOMContentLoaded", function () {
  const openNavMenuButton = document.getElementById("open-nav-menu");
  const closeNavMenuButton = document.getElementById("close-nav-menu");
  const navMenu = document.querySelector(".wrapper");

  openNavMenuButton.addEventListener("click", function () {
    navMenu.classList.add("nav-open");
  });

  closeNavMenuButton.addEventListener("click", function () {
    navMenu.classList.remove("nav-open");
  });
});