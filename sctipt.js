"use strict"

const listUl = document.querySelector('#list-ul');
const hotDishes = document.querySelector('#hotDishes');
const coldDishes = document.querySelector('#coldDishes');
const soupMeal = document.querySelector('#soup');
const grillMeal = document.querySelector('#grill');
const appetizerMeal = document.querySelector('#appetizer')
const dessertMeal = document.querySelector('#dessert');


//hotDishes.addEventListener('click', () => {
//   coldDishes.classList.remove('active');
//   hotDishes.classList.add('active');
//   soupMeal.classList.remove('active');
//   document.querySelector('#spicyNoodles').style.display = 'grid';
//   document.querySelector('#mushRoom').style.display = 'grid';
//   document.querySelector('#soupBeef').style.display = 'grid';


//   document.querySelector('#omelette').style.display = 'grid';
//   document.querySelector('#spinachLeaf').style.display = "grid";
//   document.querySelector('#spicyNoodles2').style.display = 'grid';
//});


//coldDishes.addEventListener('click', () => {
//   coldDishes.classList.add('active');
//   hotDishes.classList.remove('active');
//   soupMeal.classList.remove('active');
//    document.querySelector('#spicyNoodles').style.display = 'none';
//   document.querySelector('#soupBeef').style.display = 'none';
//   document.querySelector('#omelette').style.display = 'none';
//   document.querySelector('#spicyNoodles2').style.display = 'none';
//});

//soupMeal.addEventListener('click', soupClick);

//function soupClick() {
//   soupMeal.classList.add('active');
//   coldDishes.classList.remove('active');
//   document.querySelector('#soupBeef').style.display = 'grid';
//   document.querySelector('#spicyNoodles').style.display = 'none';
//   document.querySelector('#mushRoom').style.display = 'none';
//   document.querySelector('#omelette').style.display = 'none';
//   document.querySelector('#spinachLeaf').style.display = "none";
//   document.querySelector('#spicyNoodles2').style.display = 'none';

//}



let meals = {
   data: [
      {
         mealName: `Spicy seasoned
            seafood noodles`,
         category: "Soup",
         price: "$2.60",
         image: "img/img1.png",
         bowls: "20 Bowls available",
      },
         {
         mealName: `Salted Pasta with
         mushroom sauce`,
         category: "Cold Dishes",
         price: "$2.29",
         image: "img/img2.png",
         bowls: "11 Bowls available",
      },
      {
         mealName: `Beef dumpling in hot and sour soup`,
         category: "Soup",
         price: "$2.80",
         image: "img/img3.png",
         bowls: "16 Bowls available",
      },
      {
         mealName: `Healthy noodle with spinach leaf`,
         category: "Grill",
         price: "$3.49",
         image: "img/img5.png",
         bowls: "22 Bowls available",
      },
      {
         mealName: `Spicy instant noodle with special omelette`,
         category: "Soup",
         price: "$3.59",
         image: "img/img1.png",
         bowls: "13 Bowls available",
      },
      {
         mealName: `Spicy seasoned`,
         category: "Soup",
         price: "$2.60",
         image: "img/img4.png",
         bowls: "17 Bowls available",
      },
   ]
}

for(let i of meals.data) {
   //Create Card
   let card = document.createElement("div");
   //Card should have category and should stay hidden  initially
  
   card.classList.add("cardMeal", i.category, "hide");
   //image div
   let imgContainer = document.createElement("div");
   imgContainer.classList.add("image-container");
   //img tag
   let image = document.createElement("img");
   image.setAttribute("src", i.image);
   imgContainer.appendChild(image);
   card.appendChild(imgContainer);
   // Container
   let container = document.createElement("div");
   container.classList.add("container");
   //meals name
   let name = document.createElement("p");
   name.classList.add("meal-name");
   name.innerText = i.mealName;
   container.appendChild(name);
   //price
   let price = document.createElement("span");
   price.className = "cardSpan";
   price.innerText =  i.price;

   container.appendChild(price)

   card.appendChild(container);
   document.getElementById("meals").appendChild(card);
}


//parameter passed from ul li (Parameter same as category)

function filterMeals(value)  {
   let listGroup = document.querySelectorAll("#list-value");
   listGroup.forEach((li) => {

      if(value.toUpperCase() == li.innerText.toUpperCase()) {
         li.classList.add("active");
      } else {
         li.classList.remove("active");
      }
   });

   //select all cards
   let eleMents = document.querySelectorAll(".card");
      // loop through all cards
      eleMents.forEach((element) =>  {
         //display all cards
         if (value == "hotDishes") {
            element.classList.remove("hide");
         } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
               //
               element.classList.remove("hide")
            }  else {
               //
               element.classList.add("hide");
            }
         }
      });
};



//Search button click
document.getElementById("searchInput").addEventListener("click", () => {
   let searchInput = document.getElementById('searchInput').value;
   let elements = document.querySelector("meal");
   let cards = document.querySelector(".card")

})


//Initially display all meals 
window.onload = () => {
   filterMeals("hotDishes");
};