const recipes = [
    {
      name: "Hyderabadi Biryani",
      image: "images/hyderabadi_biryani.jpeg",
      ingredients: [
        "basmati chawal",
        "gosht (mutton ya chicken)",
        "dahi",
        "pyaz",
        "lehsan",
        "adrak",
        "hari mirch",
        "dhaniya",
        "pudina",
        "zeera",
        "garam masala",
        "kesar",
        "namak",
      ],
      steps: [
        "Basmati chawal ko 70% paka lein aur alag rakh dein.",
        "Gosht ko dahi aur masalon ke saath marinate karen aur 2 ghantay ke liye rakh dein.",
        "Pyaz ko golden brown hone tak fry karen.",
        "Ek handi mai gosht aur chawal ki layers lagayen, fried pyaz, kesar aur pudina sprinkle karen.",
        "Handi ko dum par 30 minutes ke liye rakhein.",
        "Raita ke saath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Haleem",
      image: "images/hyderabadi_haleem.jpeg",
      ingredients: [
        "gandum",
        "dalen",
        "gosht (mutton ya chicken)",
        "pyaz",
        "lehsan",
        "adrak",
        "hari mirch",
        "dahi",
        "masalay",
      ],
      steps: [
        "Gandum aur dalen ko raat bhar bhigo dein.",
        "Gosht aur masalon ke saath slow cook karen jab tak sab kuch naram ho jaye.",
        "Blender se paste bana kar mix karein.",
        "Fried pyaz aur lemon ke sath garnish karein.",
        "Garama-garam serve karen.",
      ],
    },
    {
      name: "Hyderabadi Mirchi Ka Salan",
      image: "images/mirchi_ka_salan.jpeg",
      ingredients: [
        "hari mirch",
        "khopra",
        "til",
        "peanuts",
        "pyaz",
        "imli ka paste",
        "haldi",
        "namak",
        "zeera",
        "dhania powder",
        "garam masala",
      ],
      steps: [
        "Hari mirch ko fry kar ke side par rakh dein.",
        "Khopra, til aur peanuts ko roast kar ke paste bana lein.",
        "Pyaz ko golden brown hone tak fry karen aur paste aur masalay add karen.",
        "Imli ka paste aur pani dal kar thick gravy banayein.",
        "Hari mirch shamil kar ke 10 minutes pakaein.",
        "Roti ke sath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Khatti Dal",
      image: "images/khatti_dal.jpeg",
      ingredients: [
        "arhar dal",
        "imli ka paste",
        "hari mirch",
        "kari patta",
        "zeera",
        "haldi",
        "tamatar",
        "namak",
      ],
      steps: [
        "Dal ko masalon ke saath paka kar mash kar lein.",
        "Tamatar aur imli ka paste shamil kar ke 10 minutes pakaein.",
        "Zeera aur kari patta ka baghar lagayein.",
        "Garama-garam chawal ke sath enjoy karein.",
      ],
    },
    {
      name: "Hyderabadi Dum Ka Murgh",
      image: "images/dum_ka_murgh.jpeg",
      ingredients: [
        "chicken",
        "dahi",
        "lehsan-adrak paste",
        "hari mirch",
        "pyaz",
        "zeera",
        "garam masala",
        "namak",
        "haldi",
      ],
      steps: [
        "Chicken ko dahi aur masalon ke saath marinate karen.",
        "Pyaz ko fry karke paste bana lein aur chicken ke saath mix karen.",
        "Handi ko dum par 30 minutes ke liye rakhein.",
        "Roti ke saath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Bagara Baingan",
      image: "images/bagara_baingan.jpeg",
      ingredients: [
        "baingan",
        "khopra",
        "peanuts",
        "til",
        "imli ka paste",
        "pyaz",
        "haldi",
        "namak",
        "masalay",
      ],
      steps: [
        "Baingan ko fry kar ke side par rakh dein.",
        "Khopra, til aur peanuts ka paste bana kar gravy banayein.",
        "Imli ka paste aur masalay add karen aur thick hone tak pakaein.",
        "Fried baingan shamil karen aur roti ke saath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Mutton Korma",
      image: "images/mutton_korma.jpeg",
      ingredients: [
        "mutton",
        "dahi",
        "pyaz",
        "lehsan-adrak paste",
        "garam masala",
        "zeera",
        "haldi",
        "namak",
      ],
      steps: [
        "Mutton ko dahi aur masalon ke saath pakaein jab tak naram ho jaye.",
        "Fried pyaz aur gravy ke sath mix kar ke 10 minutes pakaein.",
        "Naan ke sath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Paya",
      image: "images/hyderabadi_paya.jpeg",
      ingredients: [
        "paya (goat trotters)",
        "lehsan",
        "adrak",
        "pyaz",
        "dhania powder",
        "zeera",
        "garam masala",
        "haldi",
      ],
      steps: [
        "Paye ko masalon ke saath slow cook karen jab tak narm ho jaye.",
        "Gravy ko thick karen aur naan ke sath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Chicken 65",
      image: "images/chicken_65.jpeg",
      ingredients: [
        "chicken",
        "cornflour",
        "lehsan-adrak paste",
        "hari mirch",
        "soya sauce",
        "namak",
        "laal mirch powder",
      ],
      steps: [
        "Chicken ko masalon aur cornflour ke saath marinate karen.",
        "Deep fry kar ke chutney ke sath serve karen.",
      ],
    },
    {
        name: "Hyderabadi Shikampur Kebab",
        image: "images/shikampur_kebab.jpeg",
        ingredients: [
          "keema (beef ya mutton)",
          "chana dal",
          "lehsan-adrak paste",
          "hari mirch",
          "pudina",
          "dhania",
          "pyaz",
          "garam masala",
          "namak",
          "dahi",
        ],
        steps: [
          "Keema aur chana dal ko masalon ke sath boil kar ke grind kar lein.",
          "Halkay hath se kebab ka shape dein aur beach mai thoda dahi aur pyaz ka filling karen.",
          "Shallow fry kar ke garma-garam serve karen.",
          "Chutney aur raita ke sath enjoy karein.",
        ],
      },
    {
      name: "Hyderabadi Double Ka Meetha",
      image: "images/double_ka_meetha.jpeg",
      ingredients: [
        "bread slices",
        "milk",
        "cheeni",
        "ghee",
        "dry fruits",
      ],
      steps: [
        "Bread ko ghee mein fry karen.",
        "Milk aur cheeni ko boil kar ke thick karein aur bread par daal dein.",
        "Dry fruits se garnish kar ke serve karen.",
      ],
    },
    {
      name: "Hyderabadi Sheer Khurma",
      image: "images/sheer_khurma.jpeg",
      ingredients: [
        "vermicelli",
        "milk",
        "dates",
        "sugar",
        "dry fruits",
        "ghee",
      ],
      steps: [
        "Ghee mein vermicelli ko roast karein.",
        "Milk aur sugar add kar ke 10 minutes pakaein.",
        "Dates aur dry fruits add karke serve karen.",
      ],
    },
    {
      name: "Hyderabadi Pathar Ka Gosht",
      image: "images/pathar_ka_gosht.jpeg",
      ingredients: [
        "mutton",
        "lehsan-adrak paste",
        "hari mirch",
        "zeera",
        "garam masala",
        "namak",
      ],
      steps: [
        "Mutton ko marinate kar ke pathar par grill karein.",
        "Hari mirch aur chutney ke sath serve karen.",
      ],
    },
    {
      name: "Hyderabadi Lukhmi",
      image: "images/lukhmi.jpeg",
      ingredients: [
        "maida",
        "keema",
        "pyaz",
        "lehsan",
        "masalay",
      ],
      steps: [
        "Maida ka dough bana kar keema ka filling karein.",
        "Triangles banake deep fry karein.",
        "Snacks ke tor par serve karein.",
      ],
    },
    {
      name: "Hyderabadi Qubani Ka Meetha",
      image: "images/qubani_meetha.jpeg",
      ingredients: [
        "qubani",
        "sugar",
        "almonds",
        "cream",
      ],
      steps: [
        "Qubani ko boil karke mash karein.",
        "Sugar aur almonds add kar ke garnish karein.",
        "Cream ke sath serve karein.",
      ],
    },
    {
      name: "Hyderabadi Nihari",
      image: "images/nihari.jpg",
      ingredients: [
        "beef",
        "wheat flour",
        "ginger-garlic paste",
        "spices",
        "onions",
      ],
      steps: [
        "Beef ko spices ke sath slow cook karein.",
        "Thick gravy banakar roti ke sath serve karein.",
      ],
    },
  ];
  
  console.log(recipes);
  

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