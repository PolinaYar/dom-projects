///// items
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

///// function
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    ///// adding active class to btn
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    ///// adding active class to articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
