///// set initial value
let count = 0;

///// items
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    ///// checking classList for each button
    const styles = e.currentTarget.classList;

    ///// looking for exact classes
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    ///// setting colors
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    ///// showing value on the screen
    value.textContent = count;
  });
});
