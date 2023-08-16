"use strict"

let meals = {
   data: [
      {
         id: 1,
         mealName: `Spicy seasoned
                    seafood noodles`,
         category: "Soup",
         price: "$2.60",
         image: "img/img1.png",
         bowls: "20 Bowls available",
      },
      {
         id: 2,
         mealName: `Salted Pasta with
                    mushroom sauce`,
         category: "Appetizer",
         price: "$2.29",
         image: "img/img2.png",
         bowls: "11 Bowls available",
      },
      {
         id: 3,
         mealName: `Beef dumpling in 
                    hot and sour soup`,
         category: "Appetizer",
         price: "$2.80",
         image: "img/img3.png",
         bowls: "16 Bowls available",
      },
      {
         id: 4,
         mealName: `Healthy noodle 
                    with spinach leaf`,
         category: "Grill",
         price: "$3.49",
         image: "img/img5.png",
         bowls: "22 Bowls available",
      },
      {
         id: 5,
         mealName: `Spicy instant noodle 
                    with special omelette`,
         category: "Soup",
         price: "$3.59",
         image: "img/img1.png",
         bowls: "13 Bowls available",
      },
      {
         id: 6,
         mealName: `Spicy instant noodle 
                    with special omelette`,
         category: "Soup",
         price: "$2.60",
         image: "img/img4.png",
         bowls: "17 Bowls available",
      },
   ],
};



for(let i of meals.data) {
   //Create Card
   let card = document.createElement("div");
   card.id = 'cardMealBox';
   //Card should have category and should stay hidden  initially

   card.classList.add("cardMeal", i.category, "hide");

   //image div
   let imgContainer = document.createElement("div");
   imgContainer.classList.add("image-container");
   //img tag
   let image = document.createElement("img");
   image.id = 'cardImage';
   image.setAttribute("src", i.image);
   imgContainer.appendChild(image);
   card.appendChild(imgContainer);
   // Container
   let container = document.createElement("div");
   container.classList.add("container");
   //meals name
   let name = document.createElement("p");
   name.classList.add("mealName");
   name.innerText = i.mealName;
   container.appendChild(name);
   //price
   let price = document.createElement("span");
   price.className = "cardSpan";
   price.innerText =  i.price;
   container.appendChild(price);

   let cardBowls = document.createElement("p");
   cardBowls.className = 'cardNumber';
   cardBowls.innerText = i.bowls;
   container.appendChild(cardBowls);

   card.appendChild(container);
   document.getElementById("meals").appendChild(card);
}


function filterMeals(value) {
   let listGroup = document.querySelectorAll('.list-group-item');
   let liItem = document.querySelectorAll('#list-value');
   
   listGroup.forEach((li) => {
      //check if value equals innerText
      if(value.toUpperCase() == li.innerText.toUpperCase()) {
         li.classList.add("active");
      }  else {
         li.classList.remove("active");
      }
   });

   //select all cards
   let elements = document.querySelectorAll("#cardMealBox");
      elements.forEach((element) => {
         //display all cards
         if (value == "Hot Dishes") {
            element.classList.remove("hide");
         } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
               element.classList.remove("hide");
            }  else {
               element.classList.add("hide");
            }
         }
      });
};


searchInput.addEventListener("click", () => {
   let searchIcon = document.querySelector('.bx-search');
   searchIcon.style.display = 'none';
});



document.getElementById("search").addEventListener("click", () => {
   let searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
   let elements = document.querySelectorAll(".mealName");
   let cards = document.querySelectorAll("#cardMealBox");

   elements.forEach((element, index) => {
      if (element.innerText.toLowerCase().includes(searchInput)) {
         cards[index].classList.remove("hide");
      } else {
         cards[index].classList.add("hide");
      }
   });
});


//Initially display all meals 
window.onload = () => {
   filterMeals("Hot Dishes");
};