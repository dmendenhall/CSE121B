/* Lesson 2 */
/* VARIABLES */
// Step 1: declare and instantiate a variable to hold your name
let name = "David Mendenhall";
const theNameElement = document.querySelector("#name"); 
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
theNameElement.innerHTML = name;
// Step 3: declare and instantiate a variable to hold the current year
let year = new Date().getFullYear();
const theYearElement = document.querySelector("#year");
// Step 4: place the value of the current year variable into the HTML file
theYearElement.innerHTML = year;
// Step 5: declare and instantiate a variable to hold the name of your picture
let photo = "images/dave_mendenhall.png";  
const thePhotoElement = document.querySelector("img").setAttribute("src","images/dave_mendenhall.png");
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

/* ARRAYS */
// Step 1: declare and instantiate an array variable to hold your favorite foods
const food = ["Lasagna", "Tacos", "Hamburgers"];
const theFoodElement = document.querySelector("#food");
// Step 2: place the values of the favorite foods variable into the HTML file
theFoodElement.innerHTML = food.join(", ");
// Step 3: declare and instantiate a variable to hold another favorite food
let food2 = "Chicken";
// Step 4: add the variable holding another favorite food to the favorite food array
food.push(food2);
// Step 5: repeat Step 2
theFoodElement.innerHTML = food.join(", ");
// Step 6: remove the first element in the favorite foods array
food.shift();
// Step 7: repeat Step 2
theFoodElement.innerHTML = food.join(", ");
// Step 8: remove the last element in the favorite foods array
food.pop();
// Step 7: repeat Step 2
theFoodElement.innerHTML = food.join(", ");