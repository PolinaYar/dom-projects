// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "Lorem dolor sit amet consectetur adipisicing elit. A fugit magni voluptates illo minus aliquid officiis delectus corrupti esse eos in maiores, totam odit porro iure! Dignissimos porro excepturi vel!",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Non omnis necessitatibus veniam soluta consequatur accusantium eligendi! Cumque, eligendi voluptate hic quaerat deleniti, aliquid voluptas nesciunt quia perspiciatis nulla eum corporis fugit, minima dolore.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sit amet consectetur adipisicing elit. Nisi cum eum mollitia, sint porro quibusdam omnis alias illo perferendis amet laborum incidunt dignissimos atque vero?",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Anamet consectetur adipisicing elit. Porro tempora maiores sapiente incidunt, cupiditate molestias? Lorem ipsum dolor, sit amet consectetur adipisicing. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
