const recipes = [
    {
      name: "Kung Pao Chicken",
      image: "images/kung-pao-chicken.jpeg",
      ingredients: [
        "chicken breast",
        "capsicum",
        "spring onions",
        "roasted peanuts",
        "soy sauce",
        "vinegar",
        "cornstarch",
        "sugar",
        "red chili flakes",
        "ginger",
        "garlic",
        "oil",
      ],
      steps: [
        "Chicken breast ko cubes mein kaat kar soy sauce aur cornstarch ke saath marinate karen.",
        "Oil heat karen aur ginger, garlic aur red chili flakes fry karen.",
        "Chicken add karen aur golden brown hone tak cook karein.",
        "Capsicum aur spring onions shamil karen aur halka sa stir fry karein.",
        "Soy sauce, vinegar, sugar aur roasted peanuts add karke achi tarah mix karein.",
        "Serve with steamed rice.",
      ],
    },
 
    {
      name: "Beef and Broccoli",
      image: "images/beef-broccoli.jpeg",
      ingredients: [
        "beef slices",
        "broccoli florets",
        "soy sauce",
        "oyster sauce",
        "cornstarch",
        "sugar",
        "ginger",
        "garlic",
        "oil",
      ],
      steps: [
        "Beef slices ko soy sauce aur cornstarch mein marinate karen.",
        "Oil heat karen aur ginger aur garlic fry karen.",
        "Beef ko high flame par fry karein jab tak brown ho jaye.",
        "Broccoli florets shamil karen aur halki aanch par pakaein.",
        "Oyster sauce aur sugar add kar ke achi tarah toss karen.",
        "Serve with rice or noodles.",
      ],
    },
    {
      name: "Hot and Sour Soup",
      image: "images/hot-and-sour-soup.jpeg",
      ingredients: [
        "chicken stock",
        "shredded chicken",
        "egg",
        "mushrooms",
        "carrot",
        "soy sauce",
        "vinegar",
        "chili sauce",
        "cornstarch",
        "spring onions",
      ],
      steps: [
        "Chicken stock ko boil karen aur shredded chicken shamil karen.",
        "Carrots aur mushrooms add karen aur cook karein.",
        "Soy sauce, vinegar aur chili sauce mix karen.",
        "Cornstarch ko pani mein dissolve kar ke soup mein shamil karen.",
        "Egg ko beat karke stream ke form mein soup mein add karen.",
        "Spring onions se garnish karen aur serve karein.",
      ],
    },
    {
      name: "Chicken Fried Rice",
      image: "images/chicken-fried-rice.jpeg",
      ingredients: [
        "boiled rice",
        "chicken cubes",
        "carrots",
        "peas",
        "soy sauce",
        "egg",
        "spring onions",
        "oil",
      ],
      steps: [
        "Oil garam karen aur chicken cubes fry karen.",
        "Carrots aur peas shamil karen aur stir fry karein.",
        "Egg ko scramble karke rice mein mix karen.",
        "Soy sauce aur spring onions shamil kar ke achi tarah toss karein.",
        "Serve hot.",
      ],
    },
    {
      name: "Chow Mein",
      image: "images/chow-mein.jpeg",
      ingredients: [
        "noodles",
        "chicken strips",
        "capsicum",
        "carrots",
        "cabbage",
        "soy sauce",
        "oyster sauce",
        "garlic",
        "oil",
      ],
      steps: [
        "Noodles ko boil karen aur drain kar ke side par rakh dein.",
        "Oil heat karen aur garlic fry karen.",
        "Chicken strips add karen aur golden brown hone tak pakaein.",
        "Vegetables shamil karen aur high flame par stir fry karein.",
        "Noodles aur sauces add kar ke achi tarah toss karein.",
        "Serve hot.",
      ],
    },
    {
      name: "Spring Rolls",
      image: "images/spring-rolls.jpeg",
      ingredients: [
        "spring roll wrappers",
        "cabbage",
        "carrot",
        "chicken",
        "soy sauce",
        "cornstarch",
        "oil",
      ],
      steps: [
        "Cabbage aur carrots ko finely chop kar ke soy sauce ke saath stir fry karein.",
        "Chicken add karen aur cook karein.",
        "Mixture ko wrappers mein fill karen aur tightly roll karein.",
        "Cornstarch paste se seal karen aur golden brown hone tak fry karein.",
        "Serve with dipping sauce.",
      ],
    },
    {
      name: "Manchurian",
      image: "images/manchurian.jpeg",
      ingredients: [
        "chicken meatballs",
        "capsicum",
        "onion",
        "soy sauce",
        "ketchup",
        "vinegar",
        "cornstarch",
        "ginger-garlic paste",
        "oil",
      ],
      steps: [
        "Chicken meatballs fry karen aur side par rakh dein.",
        "Oil heat karen aur ginger-garlic paste fry karen.",
        "Capsicum aur onion shamil karen aur stir fry karein.",
        "Soy sauce, ketchup, vinegar aur cornstarch mixture add karen.",
        "Meatballs toss karen aur serve karein.",
      ],
    },
    {
      name: "Egg Foo Young",
      image: "images/egg-foo-young.jpeg",
      ingredients: [
        "eggs",
        "shredded chicken",
        "carrot",
        "spring onions",
        "soy sauce",
        "cornstarch",
        "oil",
      ],
      steps: [
        "Eggs ko soy sauce aur cornstarch ke saath beat karen.",
        "Chicken aur vegetables add karen.",
        "Oil heat karen aur mixture ko pancake ki tarah fry karen.",
        "Serve with soy sauce dip.",
      ],
    },
    {
      name: "Szechuan Chicken",
      image: "images/szechuan-chicken.jpeg",
      ingredients: [
        "chicken breast",
        "capsicum",
        "onion",
        "red chili paste",
        "soy sauce",
        "vinegar",
        "cornstarch",
        "ginger",
        "garlic",
        "oil",
      ],
      steps: [
        "Chicken breast ko soy sauce aur cornstarch ke saath marinate karen.",
        "Oil garam karen aur chicken fry karen.",
        "Ginger, garlic aur red chili paste add karen aur fry karein.",
        "Capsicum aur onion shamil karen aur stir fry karein.",
        "Soy sauce aur vinegar add karen aur achi tarah mix karein.",
        "Serve hot.",
      ],
    },
    {
      name: "Dim Sum",
      image: "images/dim-sum.jpeg",
      ingredients: [
        "dumpling wrappers",
        "chicken mince",
        "ginger",
        "garlic",
        "soy sauce",
        "spring onions",
      ],
      steps: [
        "Chicken mince ko soy sauce, ginger aur garlic ke saath mix karein.",
        "Mixture ko wrappers mein bhar kar dumplings banayein.",
        "Steamer mein 10-15 minutes tak steam karein.",
        "Serve with dipping sauce.",
      ],
    },
    {
      name: "Mapo Tofu",
      image: "images/mapo-tofu.jpeg",
      ingredients: [
        "tofu",
        "minced chicken",
        "ginger",
        "garlic",
        "soy sauce",
        "chili oil",
        "cornstarch",
      ],
      steps: [
        "Oil garam karen aur ginger-garlic fry karen.",
        "Minced chicken add karen aur cook karein.",
        "Tofu aur soy sauce add karen aur halka pakaein.",
        "Cornstarch slurry se sauce ko thicken karen.",
        "Serve hot with rice.",
      ],
    },
    {
      name: "Lemon Chicken",
      image: "images/lemon-chicken.jpeg",
      ingredients: [
        "chicken breast",
        "lemon juice",
        "cornstarch",
        "soy sauce",
        "sugar",
        "ginger",
        "garlic",
        "oil",
      ],
      steps: [
        "Chicken breast ko soy sauce aur cornstarch ke saath marinate karen.",
        "Oil heat karen aur chicken golden brown hone tak fry karein.",
        "Lemon juice, sugar, aur cornstarch slurry ke saath sauce banayein.",
        "Chicken ko sauce mein toss karen aur serve karein.",
      ],
    },
    {
      name: "Peking Duck",
      image: "images/peking-duck.jpeg",
      ingredients: [
        "duck",
        "soy sauce",
        "honey",
        "ginger",
        "garlic",
        "pancakes",
      ],
      steps: [
        "Duck ko soy sauce aur honey mixture ke saath marinate karen.",
        "Oven mein roast karein jab tak crispy ho jaye.",
        "Duck slices ko pancakes ke saath serve karein.",
      ],
    },
    {
        name: "Chinese Spaghetti",
        image: "images/spaghetti.jpeg",
        ingredients: [
          "spaghetti: 200g (boiled)",
          "chicken: 1 cup (thinly sliced)",
          "capsicum: 1/2 cup (julienned)",
          "carrots: 1/2 cup (julienned)",
          "cabbage: 1/2 cup (shredded)",
          "soySauce: 3 tablespoons",
          "oysterSauce: 2 tablespoons",
          "chiliSauce: 1 tablespoon",
          "vinegar: 1 tablespoon",
          "garlic: 2 cloves (finely chopped)",
          "oil: 2 tablespoons",
          "blackPepper: 1 teaspoon",
          "salt: to taste",
          "garnish: Spring onions"
        ],
        steps: [
          "Boil the spaghetti as per package instructions and set aside.",
          "Heat oil in a wok and cook sliced chicken until golden brown. Remove and set aside.",
          "In the same pan, sauté garlic until fragrant.",
          "Add vegetables (capsicum, carrots, cabbage) and stir-fry for 2-3 minutes.",
          "Mix in soy sauce, oyster sauce, chili sauce, vinegar, black pepper, and salt.",
          "Add cooked chicken and spaghetti to the pan. Toss well.",
          "Garnish with spring onions and serve hot."
        ]
      },
      {
        name: "Sweet and Sour Chicken",
        image: "images/sweet-and-sour-chicken.jpeg",
        ingredients: [
          "chicken breast",
          "capsicum",
          "pineapple chunks",
          "onion",
          "vinegar",
          "ketchup",
          "sugar",
          "cornstarch",
          "soy sauce",
          "ginger-garlic paste",
          "oil",
        ],
        steps: [
          "Chicken ko cornstarch aur soy sauce mein coat karen aur fry karein.",
          "Oil heat karen aur ginger-garlic paste fry karen.",
          "Capsicum aur onions add karen aur stir fry karein.",
          "Pineapple chunks, ketchup, vinegar, aur sugar shamil karen.",
          "Chicken ko sauce mein toss karen aur serve karein.",
        ],
      },
  ];
  

  function toggleModal(recipeName) {
    const modalElement = document.getElementById('exampleModal');
    const modalTitle = document.getElementById('exampleModalLabel');
    const modalImage = document.getElementById('recipeImage');
    const ingredientsEle = document.getElementById('ingredients');
    const stepsEle = document.getElementById('steps');

    const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);

    const recipe = recipes.find(recipe => recipe.name === recipeName);
  
    modalTitle.innerText = recipe.name
    modalImage.src = recipe.image

    recipe.ingredients.forEach(ingredient => {
      ingredientsEle.innerHTML += `<li>${ingredient}</li>`;
    })


    stepsEle.innerText = recipe.steps;

    if (modalElement.classList.contains('show')) {
      modalInstance.hide();
    } else {
      modalInstance.show();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.getElementById('recipe-list');
    recipes.forEach(recipe => {
      recipeContainer.innerHTML += `<div class="recipe-card">
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="Example Recipe" / style = "width = "300" height = "200"" >
      <p>
        Click on the button to view the recipe
          details.
        </p>
      <button class="view-details-button" onclick="toggleModal('${recipe.name}')">View Recipe</button>
    </div>`
    })
  });

  const filterRecipes = () => {
    const filterInput = document.getElementById('filter-input').value.toLowerCase();
    const filterRecipes = recipes.filter((recipes) => recipes.name.toLowerCase().includes(filterInput));
const recipeContainer = document.getElementById('recipe-list');
recipeContainer.innerHTML = '';
filterRecipes.forEach(recipe => {
  recipeContainer.innerHTML += `<div class="recipe-card">
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="Example Recipe" style="width: 300px; height: 200px;">
      <p>
        Click on the button to view the recipe details.
      </p>
      <button class="view-details-button" onclick="toggleModal('${recipe.name}')">View Recipe</button>
    </div>`;
  });
}
  toggleModal(recipes);
  document.getElementById('filter-button').addEventListener('click', filterRecipes);

  function toggleMenu() {
    const navItems = document.getElementById("nav-item");
    navItems.classList.toggle("active");
  }