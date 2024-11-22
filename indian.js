const recipes = [
        {
          name: "Paneer Butter Masala",
          image: "images/paneer-butter-masala.jpeg",
          ingredients: [
            "paneer",
            "tamatar",
            "pyaz",
            "lehsan",
            "adrak",
            "butter",
            "malai",
            "haldi",
            "mirch powder",
            "kasuri methi",
            "garam masala",
            "namak",
          ],
          steps: [
            "Tamatar aur pyaz ka paste banayein aur lehsan aur adrak ke saath bhunain.",
            "Butter aur malai shamil karein aur masalay daal kar mix karein.",
            "Paneer ke tukre daal kar gravy mein 10 minutes pakaein.",
            "Garam masala aur kasuri methi ke sath garnish karein aur naan ke sath serve karein.",
          ],
        },
        {
          name: "Masala Dosa",
          image: "images/masala-dosa.jpeg",
          ingredients: [
            "dosa batter",
            "aloo",
            "pyaz",
            "kari patta",
            "mustard seeds",
            "haldi",
            "hari mirch",
            "namak",
            "ghee",
          ],
          steps: [
            "Aloo ko mash karke haldi aur masalay shamil karein.",
            "Dosa batter ko tawa par daal kar patla spread karein.",
            "Aloo filling ko dosa ke center mein rakh kar fold karein.",
            "Coconut chutney aur sambhar ke sath serve karein.",
          ],
        },
       
        {
          name: "Rajma Chawal",
          image: "images/rajma-chawal.png",
          ingredients: [
            "rajma (red kidney beans)",
            "chawal",
            "pyaz",
            "tamatar",
            "adrak-lehsan paste",
            "zeera",
            "garam masala",
            "haldi",
            "namak",
          ],
          steps: [
            "Rajma ko raat bhar bhigo kar ubalein.",
            "Pyaz aur tamatar ka gravy banayein aur masalay shamil karein.",
            "Rajma gravy ko chawal ke sath serve karein.",
          ],
        },
        {
          name: "Chole Bhature",
          image: "images/chole-bhature.jpeg",
          ingredients: [
            "kabuli chana",
            "pyaz",
            "tamatar",
            "lehsan",
            "adrak",
            "garam masala",
            "bhature ke liye aata",
            "dahi",
            "soda",
          ],
          steps: [
            "Chole gravy banane ke liye pyaz aur tamatar bhun kar masalay shamil karein.",
            "Bhature dough ko set hone ke liye rakh dein aur fry karein.",
            "Chole aur garam-garam bhature ke sath serve karein.",
          ],
        },
        {
          name: "Palak Paneer",
          image: "images/palak-paneer.jpeg",
          ingredients: [
            "palak",
            "paneer",
            "pyaz",
            "lehsan",
            "adrak",
            "hari mirch",
            "butter",
            "namak",
            "garam masala",
          ],
          steps: [
            "Palak ko boil karke puree banayein.",
            "Pyaz, lehsan aur adrak ko butter mein bhun kar palak puree shamil karein.",
            "Paneer cubes daal kar 5-7 minutes pakaein.",
            "Naan ya chawal ke sath serve karein.",
          ],
        },
        {
            name: "Vada Pav",
            image: "images/vada-pav.jpeg",
            ingredients: [
              "pav buns", "batata vada", "green chutney", "fried chili", "mustard seeds"
            ],
            steps: [
              "Vada ko fry karein aur pav buns mein daal kar serve karein.",
              "Chutney aur fried chili ke saath serve karein."
            ]
          },
       
        {
            name: "Dosa",
            image: "images/dosa.jpeg",
            ingredients: [
              "dosa batter",
              "aloo stuffing",
              "hari mirch",
              "curry patta",
              "sambhar",
              "coconut chutney",
            ],
            steps: [
              "Tawa garam karein aur dosa ka batter spread karein.",
              "Aloo stuffing bhar kar dosa roll karein.",
              "Sambhar aur chutney ke saath serve karein.",
            ],
          },
          {
            name: "Sambar Vada",
            image: "images/sambar_vada.jpeg",
            ingredients: [
              "urad dal",
              "hari mirch",
              "adrak",
              "curry patta",
              "sambar",
              "imli",
            ],
            steps: [
              "Urad dal se vada batter tayar karein aur fry karein.",
              "Sambar ko imli aur masalon ke saath tayar karein.",
              "Vada ko sambar mein daal kar serve karein.",
            ],
          },
          {
            name: "Dhokla",
            image: "images/dhokla.jpeg",
            ingredients: [
              "besan",
              "dahi",
              "haldi",
              "hari mirch",
              "curry patta",
              "rai dana",
              "imli chutney",
            ],
            steps: [
              "Besan aur dahi se batter banayein aur thoda soda add karein.",
              "Steam kar ke dhokla tayar karein.",
              "Tadka laga kar garnish karein aur chutney ke saath serve karein.",
            ],
          },
          {
            name: "Shahi Tukda",
            image: "images/shahi_tukda.jpeg",
            ingredients: [
              "double roti",
              "doodh",
              "chini",
              "elaichi powder",
              "dry fruits",
              "ghee",
            ],
            steps: [
              "Double roti ko fry kar ke side par rakhein.",
              "Doodh, chini aur elaichi powder ka rabri tayar karein.",
              "Roti ke tukde par rabri daal kar garnish karein.",
              "Thanda ya garam serve karein.",
            ],
          },
          {
            name: "Pav Bhaji",
            image: "images/pav_bhaji.jpeg",
            ingredients: [
              "mixed vegetables",
              "tamatar",
              "lehsan",
              "adrak",
              "bhaji masala",
              "butter",
              "pav buns",
            ],
            steps: [
              "Sabziyon ko boil karke mash karein.",
              "Butter mein lehsan, tamatar aur masala fry karein.",
              "Mashed sabzi add karein aur butter se garnishing karein.",
              "Pav buns ke saath serve karein.",
            ],
          },
          {
            name: "Pongal",
            image: "images/pongal.jpeg",
            ingredients: [
              "rice", "moong dal", "curry leaves", "mustard seeds", "ghee",
              "black pepper", "ginger"
            ],
            steps: [
              "Rice aur dal ko cook karein.",
              "Tadka lagayein aur serve karein."
            ]
          },
        {
          name: "Idli Sambhar",
          image: "images/idli-sambhar.jpg",
          ingredients: [
            "idli batter",
            "toor dal",
            "tamarind",
            "kari patta",
            "mustard seeds",
            "sabziyan",
          ],
          steps: [
            "Idli batter ko steam karke idli banayein.",
            "Toor dal aur sabziyon ke saath sambhar tayar karein.",
            "Idli aur sambhar ko ek saath serve karein.",
          ],
        },
        {
            name: "Butter Chicken",
            image: "images/butter_chicken.jpeg",
            ingredients: [
              "chicken",
              "dahi",
              "lehsan-adrak paste",
              "tamatar puree",
              "butter",
              "kasuri methi",
              "garam masala",
              "cream",
            ],
            steps: [
              "Chicken ko dahi aur masalon ke saath marinate karein aur fry karein.",
              "Butter mein lehsan aur tamatar puree fry karein.",
              "Chicken aur cream add kar ke gravy thick hone tak pakaein.",
              "Naan ya paratha ke saath serve karein.",
            ],
          },
          {
            name: "Methi Thepla",
            image: "images/methi-thepla.jpeg",
            ingredients: [
              "methi", "aata", "jeera", "haldi", "red chili powder",
              "ginger", "salt"
            ],
            steps: [
              "Methi aur masalon ke saath dough banayein.",
              "Thepla bel kar tawa par cook karein.",
              "Dahi ya chutney ke saath serve karein."
            ]
          },
          {
            name: "Biryani",
            image: "images/biryani.jpg",
            ingredients: [
              "chawal",
              "gosht (chicken ya mutton)",
              "dahi",
              "fried pyaz",
              "garam masala",
              "tamatar",
              "adrak-lehsan paste",
              "kesar",
            ],
            steps: [
              "Chicken ko masalon ke saath paka kar gravy banayein.",
              "Handi mein chawal aur chicken ki layers lagayein.",
              "Dum ke liye handi ko halki aanch par rakh dein.",
              "Garam masala aur kesar ke sath garnish karein aur serve karein.",
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