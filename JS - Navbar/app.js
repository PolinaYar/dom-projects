// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

///// items
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

///// showing and hiding nav
navToggle.addEventListener("click", function () {
  console.log(links.classList);
  ///// add and remove method
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }

  ///// toggle method
  // links.classList.toggle("show-links");
});
