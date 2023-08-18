"use strict"

let meals = {
   data: [
      {
         id: 0,
         mealName: `Spicy seasoned
                    seafood noodles`,
         category: "Soup",
         price: "$2.60",
         image: "img/img1.png",
         bowls: "20 Bowls available",
      },
      {
         id: 1,
         mealName: `Salted Pasta with
                    mushroom sauce`,
         category: "Appetizer",
         price: "$2.29",
         image: "img/img2.png",
         bowls: "11 Bowls available",
      },
      {
         id: 2,
         mealName: `Beef dumpling in 
                    hot and sour soup`,
         category: "Appetizer",
         price: "$2.80",
         image: "img/img3.png",
         bowls: "16 Bowls available",
      },
      {
         id: 3,
         mealName: `Healthy noodle 
                    with spinach leaf`,
         category: "Grill",
         price: "$3.49",
         image: "img/img5.png",
         bowls: "22 Bowls available",
      },
      {
         id: 4,
         mealName: `Spicy instant noodle 
                    with special omelette`,
         category: "Soup",
         price: "$3.59",
         image: "img/img1.png",
         bowls: "13 Bowls available",
      },
      {
         id: 5,
         mealName: `Spicy instant noodle 
                    with special omelette`,
         category: "Soup",
         price: "$2.60",
         image: "img/img4.png",
         bowls: "17 Bowls available",
      },
   ],
};
  



meals.data.forEach((item) => {
   const addOrder = document.getElementById('addOrder');
   let orderBox = document.createElement('div');
   orderBox.className = "order-content";
   orderBox.innerHTML = `
    <div class="order-img__total">
   <img class="order-img" src=${item.image} alt="img">
   <div class="order-total__content">
   <span>${item.mealName}</span>
   <p>${item.price}</p>
   </div>
   <h2 id="order-title" class="order-heading">0</h2>
   <span class="order-price">$0</span>
   </div>

   <div class="comment-and__remove">
   <input type="text" name="comment" placeholder="Please, just a little bit spicy only.">

   <div class="border-image">
   <i id="delete-icon" class='bx bx-trash-alt'></i>
   </div>
   </div>
   `

   addOrder.appendChild(orderBox);
});


function addOrderArray(Id) {
   console.log(Id);
}




for(let i of meals.data) {
   let card = document.createElement("div");
   card.id = 'cardMealBox';
   card.addEventListener('click', () => {
      document.getElementById('paymentOrder').style.display = 'block';
      meals.data[0].id;
   });
      
   card.classList.add("cardMeal", i.category, "hide");

   let imgContainer = document.createElement("div");
   imgContainer.classList.add("image-container");

   let image = document.createElement("img");
   image.id = 'cardImage';
   image.setAttribute("src", i.image);
   imgContainer.appendChild(image);
   card.appendChild(imgContainer);

   let container = document.createElement("div");
   container.classList.add("container");

   let name = document.createElement("p");
   name.classList.add("mealName");
   name.innerText = i.mealName;
   container.appendChild(name);

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
      if(value.toUpperCase() == li.innerText.toUpperCase()) {
         li.classList.add("active");
      }  else {
         li.classList.remove("active");
      }
   });


   let elements = document.querySelectorAll("#cardMealBox");
      elements.forEach((element) => {
         if (value == "Hot Dishes") {
            element.classList.remove("hide");
         } else {
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