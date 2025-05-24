const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.recipetineats.com/tachyon/2020/02/Dan-Dan-Noodles_4-2.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  addSearchInput();
  displayMenuItems(menu);
  displayFilterButtons();
  setupSearchInput();
});

function displayFilterButtons() {
  const btnContainer = document.querySelector(".btn-container");
  const categories = ["All", "Korea", "Japan", "China"];

  categories.forEach((category) => {
    const filterBtn = document.createElement("button");
    filterBtn.textContent = category;
    filterBtn.className = "btn btn-outline-dark btn-item";

    filterBtn.addEventListener("click", () => {
      const filteredMenu =
        category === "All"
          ? menu
          : menu.filter((item) => item.category === category);
      displayMenuItems(filteredMenu);
    });

    btnContainer.appendChild(filterBtn);
  });
}

function displayMenuItems(menuItems) {
  const sectionCenter = document.querySelector(".section-center");
  sectionCenter.innerHTML = "";

  menuItems.forEach((menu) => {
    const divMenuItems = document.createElement("div");
    divMenuItems.className = "menu-items col-lg-6 col-sm-12";
    sectionCenter.appendChild(divMenuItems);

    const menuImg = document.createElement("img");
    menuImg.className = "photo";
    menuImg.src = menu.img;
    menuImg.alt = menu.title;
    divMenuItems.appendChild(menuImg);

    const divMenuInfo = document.createElement("div");
    divMenuInfo.className = "menu-info";
    divMenuItems.appendChild(divMenuInfo);

    const divMenuTitle = document.createElement("div");
    divMenuTitle.className = "menu-title";
    divMenuInfo.appendChild(divMenuTitle);

    const h4Title = document.createElement("h4");
    h4Title.textContent = menu.title;
    divMenuTitle.appendChild(h4Title);

    const h4TPrice = document.createElement("h4");
    h4TPrice.className = "price";
    h4TPrice.textContent = `$${menu.price}`;
    divMenuTitle.appendChild(h4TPrice);

    const divMenuText = document.createElement("div");
    divMenuText.className = "menu-text";
    divMenuText.textContent = menu.desc;
    divMenuInfo.appendChild(divMenuText);
  });
}

function addSearchInput() {
  const container = document.querySelector(".btn-container");
  const searchDiv = document.createElement("div");
  searchDiv.className = "search-container";
  searchDiv.style.margin = "20px 0";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "search-input";
  input.placeholder = "Search food...";
  input.className = "form-control";

  searchDiv.appendChild(input);
  container.appendChild(searchDiv);
}

function setupSearchInput() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase().trim();

    const filteredMenu = menu.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    displayMenuItems(filteredMenu);
  });
}
