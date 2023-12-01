///// items
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

///// toggle sidebar
toggleBtn.addEventListener("click", function () {
  ///// add and remove method
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }

  ///// toggle method
  sidebar.classList.toggle("show-sidebar");
});

///// close button
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
