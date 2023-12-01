///// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Consectetur adipisicing elit. Magnam, ab sint itaque aliquam fugiat omnis impedit nisi it ullam. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Perspiciatis dolores quaerat eveniet necessitatibus ex autem laborum. Qui consequatur mollitia enim cupiditate adipisci. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Soluta,
      repudiandae voluptate consequatur vel maxime consequuntur placeat quam
      nihil tempora adipisci quos corrupti laboriosam.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Sint magnam
      reprehenderit perferendis similique id illum ex veniam. Dolor es amit lorem.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Ipsa, reiciendis. Iure numquam aut qui beatae incidunt ratione illo nemo animi voluptatum? `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Itaque modi consectetur
      obcaecati. Repudiandae, at! Vel, maxime illum architecto libero beatae
      tenetur.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Ullam illum aut molestias nobis, fuga iusto eligendi exercitationem
      assumenda voluptate possimus placeat reprehenderit `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, emas is alias. `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste consectetur repellat unde quae doloribus.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `Suscipit nam, enim quasi amet, reprehenderit tempore aut quas numquam. Cumque facere repudiandae iure beatae.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

///// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

///// function to display menu items
function displayMenuItems(menuItems) {
  // creating menu items
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`;
  });

  // joining them all together and putting them inside the HTML file
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

///// function to display filter btns
function displayMenuBtns() {
  // creating categories array
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  // turning categories array into buttons
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");

  container.innerHTML = categoryBtns;
  filterBtns = container.querySelectorAll(".filter-btn");

  // making filter work
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
