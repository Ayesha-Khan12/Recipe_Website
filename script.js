const recipes = [
    {
      name: "Chicken Karhai",
      image: "images/chicken karhai.jpeg",
      ingredients: [
        "chicken breast",
        "pyaz",
        "lehsan",
        "adrak",
        "tamatar",
        "zeera",
        "dhaniya powder",
        "garam masala",
        "haldi",
        "namak",
        "kali mirch",
        "tel",
      ],
      steps: [
        "Chicken breast ko chhote tukron mai kaat kar namak aur kali mirch se marinate karen.",
        "Tel garam karen aur us mai pyaz, lehsan aur adrak daal kar bhunain jab tak khushbu na aajaye.",
        "Ab is mai chicken ke tukre daal kar golden brown hone tak bhunain.",
        "Tamatar, zeera, dhaniya powder, garam masala aur haldi shamil karen aur achi tarah mix karen.",
        "Thoda paani daal kar ubalen, phir aahista aahista 20-25 minutes ke liye pakaein jab tak chicken naram ho jaye.",
        "Garama-garam chawal ya naan ke saath serve karen.",
      ],
    },
    {
      name: "Beef Karhai",
      image: "images/beef karhai.jpg",
      ingredients: [
        "beef",
        "pyaz",
        "lehsan",
        "adrak",
        "tamatar",
        "zeera",
        "dhaniya powder",
        "garam masala",
        "haldi",
        "namak",
        "kali mirch",
        "tel",
      ],
      steps: [
        "Beef ke tukre kaat kar namak aur kali mirch se season karen.",
        "Tel garam karen aur pyaz, lehsan aur adrak daal kar khushbu aanay tak bhunain.",
        "Beef ke tukre daal kar golden brown hone tak pakaein.",
        "Tamatar, zeera, dhaniya powder, garam masala aur haldi shamil karen aur achi tarah mix karen.",
        "Paani daal kar ubalain, phir halki aanch par 30-40 minutes ke liye pakaein jab tak beef naram ho jaye.",
        "Garama-garam chawal ya naan ke saath serve karen.",
      ],
    },
    {
      name: "Beef Biryani",
      image: "images/beef biryani'.jpg",
      ingredients: [
        "beef",
        "chawal",
        "pyaz",
        "lehsan",
        "adrak",
        "tamatar",
        "dahi",
        "zeera",
        "dhaniya powder",
        "garam masala",
        "haldi",
        "namak",
        "kali mirch",
        "tel",
      ],
      steps: [
        "Chawal ko namak ke saath 70% paka lein, phir pani nikaal kar side par rakh dein.",
        "Tel garam karen aur pyaz, lehsan aur adrak daal kar golden brown hone tak bhunain.",
        "Beef, tamatar, zeera, dhaniya powder, garam masala, haldi aur dahi shamil karen aur beef naram hone tak pakaein.",
        "Bari handi mai beef mixture aur chawal layers mai lagayein, har layer par garam masala aur fried pyaz sprinkle karen.",
        "Handi ko dhak kar halki aanch par 15-20 minutes dum dein jab tak chawal puri tarah se pak jayein.",
        "Raita ya salad ke saath serve karen.",
      ],
    },
    {
      name: "Beef Gola Kabab",
      image: "images/gola kabab.jpeg",
      ingredients: [
        "beef keema",
        "pyaz",
        "lehsan",
        "adrak",
        "hari mirch",
        "zeera",
        "dhaniya powder",
        "garam masala",
        "haldi",
        "namak",
        "kali mirch",
        "tel",
      ],
      steps: [
        "Keema mai pyaz, lehsan, adrak, hari mirch, zeera, dhaniya powder, garam masala, haldi, namak aur kali mirch mix karen.",
        "Gola shape mai kabab banayein aur 30 minutes ke liye fridge mai rakh dein.",
        "Tel garam karen aur kabab ko golden brown hone tak fry karen.",
        "Garama-garam naan ya chutney ke saath serve karen.",
      ],
    },
    {
      name: "Nihari",
      image: "images/Nihari.jpg",
      ingredients: [
        "beef ya mutton shank",
        "adrak-lehsan paste",
        "fried pyaz",
        "dhaniya",
        "zeera",
        "saunf",
        "gandum ka atta",
        "masale",
      ],
      steps: [
        "Gosht ko masalon ke saath dheemi aanch par pakaein jab tak naram ho jaye.",
        "Stew ko gaadha karne ke liye gandum ka atta shamil karen.",
        "Jab gosht puri tarah se naram aur masale absorb ho jayein to serve karen.",
        "Lemon aur adrak ke tukron se garnish karen.",
      ],
    },
    {
      name: "Pulao",
      image: "images/pulao.jpg",
      ingredients: [
        "chawal",
        "gosht (beef, mutton ya chicken)",
        "masale",
        "zeera",
        "kali mirch",
        "laung",
        "caramelized pyaz",
      ],
      steps: [
        "Gosht ko masalon aur pyaz ke saath brown karen.",
        "Handi mai chawal aur paani shamil karen.",
        "Chawal naram hone aur flavors absorb hone tak pakaein.",
        "Garama-garam raita ke saath serve karen.",
      ],
    },
    {
      name: "Haleem",
      image: "images/chapli kabab.jpg",
      ingredients: [
        "gandum",
        "jaoo",
        "dalen",
        "beef ya chicken",
        "ginger-garlic paste",
        "fried onions",
        "coriander",
        "hari mirchain",
        "nimbu",
        "masalay",
      ],
      steps: [
        "Gandum, jaoo aur dalon ko goosht ke sath slow-cook karein jab tak narm na ho jaye.",
        "Mix ko thick paste mein blend karein.",
        "Fried onions, hari mirch aur taze nimbu ke slices ke sath garnish karein.",
      ],
    },
    {
      name: "Chapli Kabab",
      image: "images/chapli kabab.jpg",
      ingredients: [
        "keema (beef ya mutton)",
        "katay huay tamatar",
        "hari mirchain",
        "coriander",
        "cumin",
        "anar ke dane",
        "masalay",
      ],
      steps: [
        "Keema ko masalon, tamatar aur mirchon ke sath mix karein.",
        "Patli aur chappal si shape mein kabab banayein.",
        "Donon taraf se crisp aur pakay hue hone tak fry karein.",
      ],
    },
    {
      name: "Aloo Gosht",
      image: "images/Aloo Gosht.jpg",
      ingredients: [
        "goosht (mutton ya beef)",
        "aloo",
        "tamatar",
        "onion",
        "ginger-garlic paste",
        "coriander",
        "cumin",
        "haldi",
        "masalay",
      ],
      steps: [
        "Goosht ko onion, tamatar aur masalon ke sath cook karein.",
        "Aloo add karein aur goosht aur aloo ke tender hone tak simmer karein.",
        "Chawal ya naan ke sath serve karein.",
      ],
    },
    {
      name: "Qorma",
      image: "images/Qorma.jpg",
      ingredients: [
        "goosht (chicken ya mutton)",
        "yogurt",
        "fried onions",
        "ginger-garlic paste",
        "coriander",
        "cumin",
        "badi elaichi",
        "masalay",
      ],
      steps: [
        "Goosht ko yogurt, fried onions aur masalon ke sath pakaein jab tak narm ho jaye.",
        "Oil jab separate ho jaye aur gravy thick ho jaye tab serve karein.",
        "Naan ke sath enjoy karein.",
      ],
    },
    {
      name: "Saag",
      image: "images/Saag.jpeg",
      ingredients: [
        "sarson ka saag",
        "palak",
        "adrak",
        "lehsan",
        "hari mirchain",
        "makai ka atta",
      ],
      steps: [
        "Sarson ka saag aur palak ko adrak, lehsan aur mirchon ke sath pakaein.",
        "Smooth paste banayein aur maize flour add karke thick karein.",
        "Makki di roti ke sath serve karein.",
      ],
    },
    {
      name: "Bhindi",
      image: "images/Bhindi.jpeg",
      ingredients: [
        "bhindi",
        "onions",
        "tamatar",
        "hari mirchain",
        "cumin",
        "coriander",
        "haldi",
        "masalay",
      ],
      steps: [
        "Bhindi ko onion, tamatar aur masalon ke sath saute karein.",
        "Bhindi jab tender ho jaye aur masalay achay se mix ho jayein, to serve karein.",
        "Dry curry ke tor pe enjoy karein.",
      ],
    },
   {
     name: "Daal Chawal",
     image: "images/Daal Chawal.jpg",
     ingredients: [
       "dalen",
       "tamatar",
       "onions",
       "hari mirchain",
       "cumin",
       "coriander",
       "haldi",
     ],
     steps: [
       "Dalen ko masalon aur sabziyon ke sath tender hone tak cook karein.",
       "Steamed chawal ke upar serve karein.",
     ],
   },
   {
     name: "Pakoras",
     image:"images/pakora.jpeg",
     ingredients: [
       "besan",
       "aloo",
       "onions",
       "palak",
       "hari mirchain",
       "cumin",
       "coriander",
       "laal mirch powder",
     ],
     steps: [
       "Sabziyon ko besan aur masalon ke sath mix karein.",
       "Batter ke spoonfuls ko deep-fry karein jab tak golden brown ho jayein.",
       "As a snack enjoy karein.",
     ],
   },
   {
     name: "Samosas",
     image: "images/Samosa.webp",
     ingredients: [
       "atta",
       "aloo ya keema",
       "onions",
       "hari mirchain",
       "masalay",
     ],
     steps: [
       "Aate mein spiced potatoes ya meat filling ko bhar kar shape dein.",
       "Triangles banayein aur deep-fry karein jab tak golden ho jayein.",
       "As a snack serve karein.",
     ],
   },
   {
     name: "Keema",
     image: "images/kofta.jpeg",
     ingredients: [
       "keema (beef ya chicken)",
       "onions",
       "tamatar",
       "ginger-garlic paste",
       "hari mirchain",
       "coriander",
       "cumin",
       "garam masala",
       "masalay",
     ],
     steps: [
       "Oil garam karein aur onions ko golden brown hone tak fry karein.",
       "Ginger-garlic paste, hari mirchain aur keema add karein, jab tak color change ho tab tak pakaein.",
       "Tamatar aur masalay add karein, tamatar jab soft ho jayen tab tak pakaein.",
       "Tender hone aur flavors absorb hone tak simmer karein.",
       "Taza coriander ke sath garnish karein aur serve karein.",
     ],
   }
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

    ingredientsEle.innerHTML= '';
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
      <img src="${recipe.image}" alt="Example Recipe"  style = "width = 300px; height = 200px;" >
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