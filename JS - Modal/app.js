// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

///// items
const modal = document.querySelector(".modal-overlay");
const modalbtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

///// open modal
modalbtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

///// close modal
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
